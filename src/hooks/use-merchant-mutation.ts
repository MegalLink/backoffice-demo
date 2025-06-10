import { useMutation } from "@tanstack/react-query";
import { merchantService, type MerchantResponse } from "../services";
import { type MerchantFormData } from "../types/form-types";

export const useMerchantMutation = () => {
  return useMutation<MerchantResponse, Error, MerchantFormData>({
    mutationFn: (data: MerchantFormData) => merchantService.create(data),
    onSuccess: (data) => {
      console.log("Merchant created successfully:", data);
      // Could add toast notification here
    },
    onError: (error) => {
      console.error("Error creating merchant:", error);
      // Could add toast notification here
    },
  });
};
