import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { type KeyboardEvent } from "react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  onAddEmail: (email: string) => boolean;
  isValidEmail: (email: string) => boolean;
  disabled?: boolean;
}

export const EmailInput = ({
  value,
  onChange,
  onAddEmail,
  isValidEmail,
  disabled = false,
}: EmailInputProps) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "," || event.key === " ") {
      event.preventDefault();
      handleAddEmail();
    }
  };

  const handleAddEmail = () => {
    if (value.trim()) {
      const success = onAddEmail(value.trim());
      if (!success && !isValidEmail(value.trim())) {
        console.error("Invalid email format");
      }
    }
  };

  const isInvalid = value.length > 0 && !isValidEmail(value);

  return (
    <TextField
      fullWidth
      label="Agregar emails"
      placeholder="ejemplo@email.com"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={handleKeyPress}
      error={isInvalid}
      disabled={disabled}
      helperText={
        isInvalid
          ? "Formato de email inválido"
          : "Presiona Enter, coma o espacio para agregar"
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleAddEmail}
              disabled={!value.trim() || isInvalid || disabled}
              color="primary"
            >
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
