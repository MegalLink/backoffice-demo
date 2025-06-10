import { TextField } from "@mui/material";
import { Controller, type Control, type FieldError } from "react-hook-form";
import {
  type FormFieldProps,
  type MerchantFormData,
} from "../../types/form-types";

interface FormFieldControllerProps extends FormFieldProps {
  control: Control<MerchantFormData>;
  error?: FieldError;
  disabled?: boolean;
}

export const FormField = ({
  name,
  label,
  required = false,
  multiline = false,
  rows = 1,
  control,
  error,
  disabled = false,
  validate,
}: FormFieldControllerProps) => {
  return (
    <Controller
      name={name as keyof MerchantFormData}
      control={control}
      rules={{
        required: required ? `${label} es requerido` : false,
        validate: validate,
      }}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          required={required}
          multiline={multiline}
          rows={rows}
          error={!!error}
          helperText={error?.message}
          variant="outlined"
          disabled={disabled}
        />
      )}
    />
  );
};
