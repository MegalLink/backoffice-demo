import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
  Divider,
  Alert,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import { Save as SaveIcon } from "@mui/icons-material";
import { useMerchantForm } from "../../hooks/use-merchant-form";
import { FormField } from "../form/form-field";
import { ExecutionMode } from "../form/execution-mode";
import { EmailInput } from "../email/email-input";
import { EmailList } from "../email/email-chips";
import { DateRangePicker } from "../date/date-range-picker";

export const MerchantForm = () => {
  const {
    form,
    emailInput,
    setEmailInput,
    addEmail,
    removeEmail,
    isValidEmail,
    validatePrompt,
    onSubmit,
    handleExecutionModeChange,
    validateDateRange,
    errors,
    currentEmails,
    emailValidationError,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMerchantForm();

  const { handleSubmit, control, watch } = form;
  const executionMode = watch("executionMode");

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Configuración de Reporte
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Complete los datos del reporte a generar
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {isError && (
              <Alert severity="error">
                Error al generar el reporte: {error?.message}
              </Alert>
            )}

            {isSuccess && (
              <Alert severity="success">Reporte generado exitosamente</Alert>
            )}

            <FormField
              name="merchant_id"
              label="Merchant ID"
              required
              control={control}
              error={errors.merchant_id}
              disabled={isLoading}
            />

            <Box>
              <EmailInput
                value={emailInput}
                onChange={setEmailInput}
                onAddEmail={addEmail}
                isValidEmail={isValidEmail}
                disabled={isLoading}
              />
              <EmailList
                emails={currentEmails}
                onRemoveEmail={removeEmail}
                disabled={isLoading}
              />
              {emailValidationError && (
                <FormHelperText error sx={{ mt: 1 }}>
                  {emailValidationError}
                </FormHelperText>
              )}
            </Box>

            <Divider />

            <ExecutionMode
              control={control}
              onModeChange={handleExecutionModeChange}
              disabled={isLoading}
            />

            {executionMode === "on-demand" && (
              <>
                <Divider />
                <DateRangePicker
                  control={control}
                  validateDateRange={validateDateRange}
                  disabled={isLoading}
                />
              </>
            )}

            <Divider />

            <FormField
              name="description_prompt"
              label="Descripción de Reporte"
              required
              multiline
              rows={4}
              control={control}
              error={errors.description_prompt}
              disabled={isLoading}
              validate={validatePrompt}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button variant="outlined" type="button" disabled={isLoading}>
                Cancelar
              </Button>
              <Button
                variant="contained"
                type="submit"
                startIcon={
                  isLoading ? <CircularProgress size={20} /> : <SaveIcon />
                }
                disabled={isLoading}
              >
                {isLoading ? "Generando..." : "Generar Reporte"}
              </Button>
            </Box>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};
