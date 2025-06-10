import { Chip, Box } from "@mui/material";
import { type EmailChipProps } from "../../types/form-types";

export const EmailChip = ({ email, onDelete, disabled = false }: EmailChipProps & { disabled?: boolean }) => {
  return (
    <Chip
      label={email}
      onDelete={disabled ? undefined : onDelete}
      variant="outlined"
      color="primary"
      sx={{ margin: 0.5 }}
    />
  );
};

interface EmailListProps {
  emails: string[];
  onRemoveEmail: (email: string) => void;
  disabled?: boolean;
}

export const EmailList = ({ emails, onRemoveEmail, disabled = false }: EmailListProps) => {
  if (emails.length === 0) return null;

  return (
    <Box sx={{ mt: 1, mb: 2 }}>
      {emails.map((email) => (
        <EmailChip
          key={email}
          email={email}
          onDelete={() => onRemoveEmail(email)}
          disabled={disabled}
        />
      ))}
    </Box>
  );
};
