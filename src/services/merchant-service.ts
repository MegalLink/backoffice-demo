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

export const merchantService = {
  create: async (data: MerchantFormData): Promise<any> => {
    const type =
      data.executionMode === EXECUTION_MODES.ON_DEMAND
        ? API_TYPES.ON_DEMAND
        : API_TYPES.SCHEDULED;

    const payload: MerchantRequest = {
      merchant_id: data.merchant_id,
      emails: data.client_emails,
      prompt: data.description_prompt,
      type: type,
    };

    if (type === API_TYPES.ON_DEMAND) {
      payload.start_datetime = data.date_from
        ? data.date_from.getTime()
        : Date.now();
      payload.end_datetime = data.date_to ? data.date_to.getTime() : Date.now();
    }

    const endpoint =
      type === API_TYPES.ON_DEMAND ? ENDPOINTS.ON_DEMAND : ENDPOINTS.SCHEDULE;

    const response = await apiClient.post(endpoint, payload);
    return response.data;
  },
};
