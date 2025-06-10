import { Container, Typography, Box } from "@mui/material";
import { MerchantForm } from "./components";

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Kushki Backoffice Demo
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Configuración de MUI con tema personalizado de Kushki
        </Typography>
      </Box>

      <MerchantForm />
    </Container>
  );
}

export default App;
