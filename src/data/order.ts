import { useQuery } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import { API_ENDPOINTS } from '@/data/client/api-endpoints';
import { mapPaginatorData } from '@/utils/data-mappers';
import {
  OrderQueryOptions,
  OrderPaginator,
  Order,
  InvoiceTranslatedText,
  CreateOrderInput,
} from '@/types';
import { orderClient } from './client/order';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import { adminOnly, getAuthCredentials, hasAccess, ownerOnly } from '@/utils/auth-utils';
import { useMeQuery } from './user';

export const useOrdersQuery = (
  params: Partial<OrderQueryOptions>,
  options: any = {}
) => {
  const { permissions } = getAuthCredentials();
  const { data: me } = useMeQuery()
  let permission = hasAccess(adminOnly, permissions);
  const formatedParams: Partial<OrderQueryOptions> = {
    ...params,
    vendor_id: String(me?.id)
  }

  const { data, error, isLoading } = useQuery<OrderPaginator, Error>(
    [(permission ? API_ENDPOINTS.ORDERS : API_ENDPOINTS.VENDOR_ORDERS), formatedParams],
    ({ queryKey, pageParam }) => {
      console.log("hello", pageParam)
      const orderClientParams = Object.assign({}, queryKey[1], pageParam)
      return permission ? orderClient.paginated(orderClientParams) : orderClient.vendorOrdersPaginated(orderClientParams)
    },
    {
      keepPreviousData: true,
      ...options,
    }
  );
  return {
    orders: data?.data ?? [],
    paginatorInfo: mapPaginatorData(data),
    error,
    loading: isLoading,
  };
};

export const useOrderQuery = ({
  id,
  language,
}: {
  id: string;
  language: string;
}) => {
  const { data, error, isLoading } = useQuery<Order, Error>(
    [API_ENDPOINTS.ORDERS, { id, language }],
    () => orderClient.get({ id, language }),
    {
      enabled: Boolean(id), // Set to true to enable or false to disable
    }
  );

  return {
    order: data,
    error,
    isLoading,
  };
};
export const useVendorOrderQuery = ({
  id,
  language,
}: {
  id: string;
  language: string;
}) => {
  const { data, error, isLoading } = useQuery<Order, Error>(
    [API_ENDPOINTS.VENDOR_ORDERS, { id, language }],
    () => orderClient.getVendorOrder({ id, language }),
    {
      enabled: Boolean(id), // Set to true to enable or false to disable
    }
  );

  return {
    order: data,
    error,
    isLoading,
  };
};

// export const useCreateOrderMutation = () => {
//   return useMutation(orderClient.create);
// };

export function useCreateOrderMutation() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();

  const { mutate: createOrder, isLoading } = useMutation(orderClient.create, {
    onSuccess: (data: any) => {
      if (data?.id) {
        router.push(`${Routes.order.list}/${data?.id}`);
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};
      toast.error(data?.message);
    },
  });

  function formatOrderInput(input: CreateOrderInput) {
    const formattedInputs = {
      ...input,
      language: locale,
      // TODO: Make it for Graphql too
      invoice_translated_text: {
        subtotal: t('order-sub-total'),
        discount: t('order-discount'),
        tax: t('order-tax'),
        delivery_fee: t('order-delivery-fee'),
        total: t('order-total'),
        products: t('text-products'),
        quantity: t('text-quantity'),
        invoice_no: t('text-invoice-no'),
        date: t('text-date'),
      },
    };
    createOrder(formattedInputs);
  }

  return {
    createOrder: formatOrderInput,
    isLoading,
  };
}

export const useUpdateVendorOrderMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
    return useMutation(orderClient.updateVendorOrder, {
      onSuccess: () => {
        toast.success(t('common:successfully-updated'));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ORDERS);
      },
    });
};
export const useUpdateOrderMutation = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
    return useMutation(orderClient.update, {
      onSuccess: () => {
        toast.success(t('common:successfully-updated'));
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(API_ENDPOINTS.ORDERS);
      },
    });
};

export const useDownloadInvoiceMutation = (
  {
    order_id,
    isRTL,
    language,
  }: { order_id: string; isRTL: boolean; language: string },
  options: any = {}
) => {
  const { t } = useTranslation();
  const formattedInput = {
    order_id,
    is_rtl: isRTL,
    language,
    translated_text: {
      subtotal: t('order-sub-total'),
      discount: t('order-discount'),
      tax: t('order-tax'),
      delivery_fee: t('order-delivery-fee'),
      total: t('order-total'),
      products: t('text-products'),
      quantity: t('text-quantity'),
      invoice_no: t('text-invoice-no'),
      date: t('text-date'),
      paid_from_wallet: t('text-paid_from_wallet'),
      amount_due: t('text-amount-due'),
    },
  };

  return useQuery<string, Error>(
    [API_ENDPOINTS.ORDER_INVOICE_DOWNLOAD],
    () => orderClient.downloadInvoice(formattedInput),
    {
      ...options,
    }
  );
};

export function useOrderSeen() {
  const queryClient = useQueryClient();
  const { t } = useTranslation('common');
  const {
    mutate: readOrderNotice,
    isLoading,
    isSuccess,
  } = useMutation(orderClient.orderSeen, {
    onSuccess: () => { },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.ORDER_SEEN);
    },
  });

  return { readOrderNotice, isLoading, isSuccess };
}
