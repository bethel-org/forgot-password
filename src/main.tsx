import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import ResetPassword from "./reset-password";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ResetPassword />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
