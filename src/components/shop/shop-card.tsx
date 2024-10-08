import Image from 'next/image';
import Link from '@/components/ui/link';
import { Shop, UserAddress } from '@/types';
import classNames from 'classnames';
import { formatAddress } from '@/utils/format-address';
import { useFormatPhoneNumber } from '@/utils/format-phone-number';
import { MapPinIcon } from '@/components/icons/map-pin';
import { isNumber } from 'lodash';
import ShopAvatar from '@/components/shop/shop-avatar';
import { PhoneOutlineIcon } from '@/components/icons/phone';
import { useTranslation } from 'next-i18next';
import { WorldIcon } from '../icons/worldIcon';

type ShopCardProps = {
  shop: Shop;
};

export const ListItem = ({ title, info }: { title: string; info: number }) => {
  return (
    <>
      {isNumber(info) ? (
        <p className="text-sm font-semibold text-muted-black">{Number(info)}</p>
      ) : (
        ''
      )}
      {title ? <p className="text-xs text-[#666]">{title}</p> : ''}
    </>
  );
};

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const { t } = useTranslation();

  const phoneNumber = useFormatPhoneNumber({
    customer_contact: shop?.settings?.contact as string,
  });

  return (
    <Link
      href={`/${shop?.slug}`}
      className="overflow-hidden rounded-lg bg-white pb-6"
    >
      <div
        className={classNames(
          'relative flex h-22 justify-end overflow-hidden'
        )}
      >
        <Image
          alt={shop?.name as string}
          src={'/topographic.svg'}
          width={350}
          height={88}
          sizes="(max-width: 768px) 100vw"
          className="h-auto w-auto object-contain"
        />
      </div>
      <div className="relative z-10 -mt-[4.25rem] ml-6 flex flex-wrap items-center gap-3">
        <ShopAvatar
          is_active={shop?.is_active}
          name={shop?.name}
          logo={shop?.logo}
        />
        <div className="relative max-w-[calc(100%-104px)] flex-auto pr-4 pt-2">
          {shop?.name ? (
            <h3 className="text-base font-medium leading-none text-muted-black">
              {shop?.name}
            </h3>
          ) : (
            ''
          )}

          {shop?.custom_website && (
            <div className="mt-2 flex w-11/12 items-center gap-1 text-xs leading-none">
              <WorldIcon width={15} className="shrink-0 text-[#666666]" />

              <p className="truncate text-xs text-base-dark">
                {shop?.custom_website}
              </p>
            </div>
          )}
          <div className="mt-2 flex w-11/12 items-center gap-1 text-xs leading-none">
            <PhoneOutlineIcon width={15} className="shrink-0 text-[#666666]" />
            <p className="truncate text-xs text-base-dark">
              {phoneNumber ?? '???'}
            </p>
          </div>  <div className="mt-2 flex w-11/12 items-center gap-1 text-xs leading-none">
            <MapPinIcon width={15} className="shrink-0 text-[#666666]" />
            <p className="truncate text-base-dark">
              {formatAddress(shop?.address as UserAddress)
                ? formatAddress(shop?.address as UserAddress)
                : '???'}
            </p>
          </div>


          {/* <div className="mt-2 flex w-11/12 items-center gap-1 text-xs leading-none">
            <PhoneOutlineIcon className="shrink-0 text-[#666666]" />
            <p className="truncate text-xs text-base-dark">
              {phoneNumber ?? '???'}
            </p>
          </div> */}

        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
