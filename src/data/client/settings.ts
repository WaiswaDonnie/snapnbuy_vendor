import { Settings, SettingsInput, SettingsOptionsInput, UpdateSettingsInput } from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { crudFactory } from './curd-factory';
import { HttpClient } from '@/data/client/http-client';

export const settingsClient = {
  ...crudFactory<Settings, any, SettingsOptionsInput>(API_ENDPOINTS.SETTINGS),
  all({ language }: { language: string }) {
    return HttpClient.get<Settings>(API_ENDPOINTS.SETTINGS, {
      language,
    });
  },
  update: ({ ...data }: UpdateSettingsInput) => {
    return HttpClient.put<Settings>(API_ENDPOINTS.SETTINGS+`/${data.id}`, { ...data });
  },
};
