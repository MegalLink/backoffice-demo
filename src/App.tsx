import { Container, Typography, Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { MerchantForm } from "./components";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
