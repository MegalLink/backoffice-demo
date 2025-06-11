import { Box, Typography, TextField, Stack } from "@mui/material";
import { Controller, type Control } from "react-hook-form";
import { type MerchantFormData } from "../../types/form-types";

interface DateRangePickerProps {
  control: Control<MerchantFormData>;
  validateDateRange: (
    dateFrom: Date | null,
    dateTo: Date | null
  ) => string | true;
  disabled?: boolean;
}

const formatDateForInput = (date: Date | null | undefined): string => {
  if (!date) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const parseInputDate = (value: string): Date | null => {
  if (!value) return null;
  return new Date(value);
};

export const DateRangePicker = ({
  control,
  validateDateRange,
  disabled = false,
}: DateRangePickerProps) => {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Seleccionar rango de fechas (máximo 24 horas)
      </Typography>
      <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
        <Controller
          name="date_from"
          control={control}
          rules={{
            required: "Fecha de inicio es requerida",
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Fecha y hora de inicio"
              type="datetime-local"
              value={formatDateForInput(field.value)}
              onChange={(e) => {
                field.onChange(parseInputDate(e.target.value));
              }}
              error={!!error}
              helperText={error?.message}
              disabled={disabled}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />

        <Controller
          name="date_to"
          control={control}
          rules={{
            required: "Fecha de fin es requerida",
            validate: (value, formValues) => {
              return validateDateRange(
                formValues.date_from || null,
                value || null
              );
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Fecha y hora de fin"
              type="datetime-local"
              value={formatDateForInput(field.value)}
              onChange={(e) => {
                field.onChange(parseInputDate(e.target.value));
              }}
              error={!!error}
              helperText={error?.message}
              disabled={disabled}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
      </Stack>
    </Box>
  );
};
