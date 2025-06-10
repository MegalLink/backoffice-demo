import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { type MerchantFormData } from "../types/form-types";
import { useMerchantMutation } from "./use-merchant-mutation";

const defaultValues: MerchantFormData = {
  merchant_id: "",
  client_emails: [],
  description_prompt: "",
  executionMode: "on-demand",
  date_from: null,
  date_to: null,
};

export const useMerchantForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailValidationError, setEmailValidationError] = useState<
    string | null
  >(null);
  const mutation = useMerchantMutation();

  const form = useForm<MerchantFormData>({
    defaultValues,
    mode: "onChange",
  });

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (mutation.isSuccess) {
      const timer = setTimeout(() => {
        mutation.reset();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mutation.isSuccess, mutation]);

  const {
    watch,
    setValue,
    formState: { errors },
    reset,
  } = form;
  const currentEmails = watch("client_emails");

  const addEmail = (email: string) => {
    if (email && !currentEmails.includes(email) && isValidEmail(email)) {
      setValue("client_emails", [...currentEmails, email]);
      setEmailInput("");
      setEmailValidationError(null);
      return true;
    }
    return false;
  };

  const removeEmail = (emailToRemove: string) => {
    const newEmails = currentEmails.filter((email) => email !== emailToRemove);
    setValue("client_emails", newEmails);

    if (newEmails.length === 0) {
      setEmailValidationError("Debe agregar al menos un email");
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePrompt = (value: string): string | true => {
    if (!value || value.trim().length === 0) {
      return "La descripción del prompt es requerida";
    }
    if (value.trim().length < 10) {
      return "La descripción del prompt debe tener al menos 10 caracteres";
    }
    return true;
  };

  const validateEmails = (): string | true => {
    if (currentEmails.length === 0) {
      return "Debe agregar al menos un email";
    }
    return true;
  };

  const onSubmit = (data: MerchantFormData) => {
    if (currentEmails.length === 0) {
      setEmailValidationError("Debe agregar al menos un email");
      return;
    }

    const submissionData = { ...data };

    if (data.executionMode === "on-demand") {
      if (!data.date_from || !data.date_to) {
        const now = new Date();
        const startOfDay = new Date(now);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);

        submissionData.date_from = startOfDay;
        submissionData.date_to = endOfDay;
      }
    } else {
      submissionData.date_from = null;
      submissionData.date_to = null;
    }

    mutation.mutate(submissionData, {
      onSuccess: () => {
        reset();
        setEmailInput("");
        setEmailValidationError(null);
      },
    });
  };

  const handleExecutionModeChange = (mode: "on-demand" | "real-time") => {
    setValue("executionMode", mode);
    if (mode === "real-time") {
      setValue("date_from", null);
      setValue("date_to", null);
    }
  };

  const validateDateRange = (
    dateFrom: Date | null,
    dateTo: Date | null
  ): string | true => {
    if (!dateFrom || !dateTo) return true;

    const diffInMs = dateTo.getTime() - dateFrom.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);

    if (diffInHours > 24) {
      return "El rango máximo permitido es de 24 horas";
    }

    if (dateTo <= dateFrom) {
      return "La fecha de fin debe ser posterior a la fecha de inicio";
    }

    return true;
  };

  return {
    form,
    emailInput,
    setEmailInput,
    addEmail,
    removeEmail,
    isValidEmail,
    validatePrompt,
    validateEmails,
    onSubmit,
    handleExecutionModeChange,
    validateDateRange,
    errors,
    currentEmails,
    emailValidationError,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
