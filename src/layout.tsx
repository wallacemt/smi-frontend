import type { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/ui/app-sidebar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-black border-t border-gray-700 mt-6 w-full">
          <div className="container mx-auto px-4 py-4">
            <p className="text-center text-gray-400 text-sm">
              © 2025 BaixioTurismo - Dashboard de Análise de Redes Sociais com IA
            </p>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
