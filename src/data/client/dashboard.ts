import { HttpClient } from '@/data/client/http-client';
import { API_ENDPOINTS } from '@/data/client/api-endpoints';

export const dashboardClient = {
  analytics(userId:string) {
    console.log("called analytics",userId)
    return HttpClient.get<any>(API_ENDPOINTS.ANALYTICS,{userId:userId});
  },
};
