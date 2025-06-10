import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { merchantService } from "../services";
import { type MerchantFormData } from "../types/form-types";

export const useMerchantMutation = () => {
  return useMutation<any, Error, MerchantFormData>({
    mutationFn: (data: MerchantFormData) => merchantService.create(data),
    onSuccess: () => {
      toast.success("Solicitud enviada correctamente");
    },
    onError: () => {
      toast.error("Error al enviar la solicitud");
    },
  });
};
