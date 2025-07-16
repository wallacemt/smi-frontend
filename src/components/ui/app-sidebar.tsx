import * as React from "react";
import { Bot, Frame, Gauge, History, Map, PieChart, Settings2, Signature, SquareActivity } from "lucide-react";
import { RiAiGenerate2 } from "react-icons/ri";
import { NavMain } from "@/components/ui/nav-main";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { FaFacebook, FaInstagram, FaPerson, FaTiktok, FaYoutube } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { Link } from "react-router";

// This is sample data.
const data = {
  user: {
    name: "AI Manager",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Gauge,
      isActive: true,
    },
    {
      title: "AI",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Analisador IA",
          url: "/ai-analyzer",
          icon: IoMdAnalytics,
        },
        {
          title: "Gerar Post",
          url: "/post/generate",
          icon: RiAiGenerate2,
        },
        {
          title: "Historico de Posts",
          url: "/post/history",
          icon: History,
        },
        {
          title: "Personas",
          url: "/personas",
          icon: FaPerson,
        },
      ],
    },
    {
      title: "Redes Sociais",
      url: "#",
      icon: SquareActivity,
      items: [
        {
          title: "Instagram",
          url: "/instagram",
          icon: FaInstagram,
        },
        {
          title: "Facebook",
          url: "/facebook",
          icon: FaFacebook,
        },
        {
          title: "TikTok",
          url: "/tiktok",
          icon: FaTiktok,
        },
        {
          title: "YouTube",
          url: "/youtube",
          icon: FaYoutube,
        },
      ],
    },
    {
      title: "Relatorios",
      url: "/reports",
      icon: Signature,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to={"/"} className={` ${open ? "flex" : "hidden"}  items-center`}>
          <img src="/logo.png" alt="Logo" className="w-10 h-10  animate-pulse" />
          <h1 className="text-xl font-bold">
            Baixio Turismo <span className="font-bold text-xs absolute text-red-600">AI</span>
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="overflow-hidden">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
