import { apiClient } from "./api-client";
import { type MerchantFormData } from "../types/form-types";
import {
  EXECUTION_MODES,
  API_TYPES,
  ENDPOINTS,
  type ApiType,
} from "../constants";

export interface MerchantRequest {
  merchant_id: string;
  emails: string[];
  prompt: string;
  type: ApiType;
  start_datetime?: number;
  end_datetime?: number;
}

export interface MerchantResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const merchantService = {
  create: async (data: MerchantFormData): Promise<MerchantResponse> => {
    const type =
      data.executionMode === EXECUTION_MODES.ON_DEMAND
        ? API_TYPES.ON_DEMAND
        : API_TYPES.AUTOMATIC;

    const payload: MerchantRequest = {
      merchant_id: data.merchant_id,
      emails: data.client_emails,
      prompt: data.description_prompt,
      type: type,
    };

    if (type === API_TYPES.ON_DEMAND) {
      // Convert to Unix timestamps (seconds, not milliseconds)
      payload.start_datetime = data.date_from
        ? Math.floor(data.date_from.getTime() / 1000)
        : Math.floor(Date.now() / 1000);
      payload.end_datetime = data.date_to
        ? Math.floor(data.date_to.getTime() / 1000)
        : Math.floor(Date.now() / 1000);
    }

    const endpoint =
      type === API_TYPES.ON_DEMAND ? ENDPOINTS.ON_DEMAND : ENDPOINTS.SCHEDULE;

    const response = await apiClient.post<MerchantResponse>(endpoint, payload);
    return response.data;
  },
};
