import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import AppRouter from "./routes";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./contexts/UserContext";
import { Toaster } from "./components/ui/sonner";
import TopLoadingBar from "./components/ui/top-loading-bar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TopLoadingBar />
        <AppRouter />
        <Toaster richColors position="top-right" expand />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
