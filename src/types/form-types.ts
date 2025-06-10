import { type ExecutionMode } from "../constants";

export interface MerchantFormData {
  merchant_id: string;
  client_emails: string[];
  description_prompt: string;
  executionMode: ExecutionMode;
  date_from?: Date | null;
  date_to?: Date | null;
}

export interface FormFieldProps {
  name: string;
  label: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  validate?: (value: any) => string | true;
}

export interface EmailChipProps {
  email: string;
  onDelete: () => void;
}
