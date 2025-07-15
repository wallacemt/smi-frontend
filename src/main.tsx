import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppRouter />
        <Toaster richColors position="top-right" expand />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
