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
              value={
                field.value
                  ? new Date(field.value).toISOString().slice(0, 16)
                  : ""
              }
              onChange={(e) => {
                field.onChange(
                  e.target.value ? new Date(e.target.value) : null
                );
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
              value={
                field.value
                  ? new Date(field.value).toISOString().slice(0, 16)
                  : ""
              }
              onChange={(e) => {
                field.onChange(
                  e.target.value ? new Date(e.target.value) : null
                );
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
