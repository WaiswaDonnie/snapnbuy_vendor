import type { GetParams, PaginatorInfo } from '@/types';
import { HttpClient } from './http-client';
import { API_ENDPOINTS } from './api-endpoints';

interface LanguageParam {
  language: string;
}

export function crudFactory<Type, QueryParams extends LanguageParam, InputType>(
  endpoint: string
) {
  return {
    all(params: QueryParams) {
      return HttpClient.get<Type[]>(endpoint, params);
    },
    paginated(params: QueryParams) {
      return HttpClient.get<PaginatorInfo<Type>>(endpoint, params);
    },
    get({ slug, language }: GetParams) {
      return HttpClient.get<Type>(`${endpoint}/${slug}`, { language });
    },
    create(data: InputType) {
      return HttpClient.post<Type>(endpoint, data);
    },
    update({id, ...input }: Partial<InputType> & { id: any }) {
      return HttpClient.put<Type>(`${endpoint}/${id}`, input);
    },
    updateVendorOrder({tracking_number, ...input }: Partial<InputType> & { tracking_number: string }) {
      return HttpClient.put<Type>(`${API_ENDPOINTS.VENDOR_ORDERS}/${tracking_number}`, input);
    },
    delete({ id }: { id: string }) {
      return HttpClient.delete<boolean>(`${endpoint}/${id}`);
    },
  };
}
