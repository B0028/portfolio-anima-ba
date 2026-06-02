import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function AppThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: { main: prefersDarkMode ? "#5500fd" : "#7c3aed" },
          text: {
            primary: prefersDarkMode ? "#f3f4f6" : "#08060d",
            secondary: prefersDarkMode ? "#9ca3af" : "#6b6375",
          },
          background: {
            default: prefersDarkMode ? "#020204" : "#ffffff",
            paper: prefersDarkMode ? "#09090e" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "system-ui, 'Segoe UI', Roboto, sans-serif",
          h1: {
            fontWeight: 500,
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "-0.03em",
          },
          h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
