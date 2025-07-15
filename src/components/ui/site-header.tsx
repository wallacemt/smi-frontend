import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface SiteProps {
  title: string;
  icon?: React.ReactNode;
}

export function SiteHeader({ title, icon }: SiteProps) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2  transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) p-1 relative">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-2 text-sidebar-foreground" />
        <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
        <p className="flex items-center font-semibold text-xl text-popover-foreground">
          {icon && <span>{icon}</span>}
          <span className={`font-principal`}>{title}</span>
        </p>
      </div>
    </header>
  );
}
