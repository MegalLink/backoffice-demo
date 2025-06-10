import { type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import kushkiTheme from "./kushki-theme";

interface ThemeConfigProviderProps {
  children: ReactNode;
}

export const ThemeConfigProvider = ({ children }: ThemeConfigProviderProps) => {
  return (
    <ThemeProvider theme={kushkiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
