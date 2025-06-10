import { createTheme } from "@mui/material/styles";

const kushkiTheme = createTheme({
  palette: {
    primary: {
      main: "#00B896", // Kushki teal/green
      light: "#4DD0B1",
      dark: "#008A73",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1B365D", // Navy blue
      light: "#4A5F7A",
      dark: "#122440",
      contrastText: "#ffffff",
    },
    success: {
      main: "#00D4AA",
      light: "#33DCBB",
      dark: "#00A385",
    },
    info: {
      main: "#00ACC1",
      light: "#4FC3F7",
      dark: "#0097A7",
    },
    warning: {
      main: "#FF9800",
      light: "#FFB74D",
      dark: "#F57C00",
    },
    error: {
      main: "#F44336",
      light: "#EF5350",
      dark: "#D32F2F",
    },
    background: {
      default: "#F8F9FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1B365D",
      secondary: "#6C7B7F",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#1B365D",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#1B365D",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#1B365D",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#1B365D",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#1B365D",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#1B365D",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#6C7B7F",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#1B365D",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "10px 24px",
        },
        contained: {
          boxShadow: "0 2px 8px rgba(0, 184, 150, 0.25)",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0, 184, 150, 0.35)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(27, 54, 93, 0.08)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default kushkiTheme;
