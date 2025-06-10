import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import { Controller, type Control } from "react-hook-form";
import { type MerchantFormData } from "../../types/form-types";

interface ExecutionModeProps {
  control: Control<MerchantFormData>;
  onModeChange: (mode: "on-demand" | "real-time") => void;
  disabled?: boolean;
}

export const ExecutionMode = ({
  control,
  onModeChange,
  disabled = false,
}: ExecutionModeProps) => {
  return (
    <Box>
      <Controller
        name="executionMode"
        control={control}
        rules={{ required: "Modo de ejecución es requerido" }}
        render={({ field, fieldState: { error } }) => (
          <FormControl component="fieldset" error={!!error} disabled={disabled}>
            <FormLabel component="legend">Modo de Ejecución</FormLabel>
            <RadioGroup
              {...field}
              onChange={(e) => {
                const value = e.target.value as "on-demand" | "real-time";
                field.onChange(value);
                onModeChange(value);
              }}
              row
            >
              <FormControlLabel
                value="on-demand"
                control={<Radio />}
                label="Bajo Demanda"
              />
              <FormControlLabel
                value="real-time"
                control={<Radio />}
                label="Tiempo Real"
              />
            </RadioGroup>
            {error && (
              <Box sx={{ color: "error.main", fontSize: "0.75rem", mt: 0.5 }}>
                {error.message}
              </Box>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
};
