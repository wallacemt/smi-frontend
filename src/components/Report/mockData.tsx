import type { MockData } from "@/types/reports";
import { FaCamera, FaDollarSign, FaFacebook, FaHeart, FaInstagram, FaTiktok, FaUsers, FaYoutube } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { HiOutlineTrendingUp } from "react-icons/hi";
export const mockData: MockData = {
  reportPeriods: [
    { value: "7", label: "Últimos 7 dias" },
    { value: "30", label: "Últimos 30 dias", selected: true },
    { value: "90", label: "Últimos 90 dias" },
    { value: "365", label: "Último ano" },
  ],
  platforms: [
    { value: "all", label: "Todas as plataformas", selected: true },
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "tiktok", label: "TikTok" },
    { value: "youtube", label: "YouTube" },
  ],
  metrics: [
    { value: "engagement", label: "Engajamento", selected: true },
    { value: "reach", label: "Alcance" },
    { value: "followers", label: "Seguidores" },
    { value: "views", label: "Visualizações" },
  ],
  platformGrowth: [
    { name: "Instagram", icon: "instagram", followers: "45.2K seguidores", growth: "+12.5%" },
    { name: "Facebook", icon: "facebook", followers: "38.7K curtidas", growth: "+6.8%" },
    { name: "TikTok", icon: "tiktok", followers: "32.8K seguidores", growth: "+24.1%" },
    { name: "YouTube", icon: "youtube", followers: "10.8K inscritos", growth: "+15.3%" },
  ],
  contentAnalysis: {
    types: [
      { name: "Vídeos", percent: 85, colorClass: "bg-blue-500" },
      { name: "Fotos", percent: 72, colorClass: "bg-green-500" },
      { name: "Carrossel", percent: 68, colorClass: "bg-purple-500" },
      { name: "Stories", percent: 45, colorClass: "bg-pink-500" },
    ],
    popularThemes: [
      { name: "Gastronomia", growth: "+23%", growthColor: "text-green-400" },
      { name: "Praias", growth: "+18%", growthColor: "text-green-400" },
      { name: "Cultura Local", growth: "+15%", growthColor: "text-green-400" },
      { name: "Aventura", growth: "+12%", growthColor: "text-green-400" },
      { name: "Hospedagem", growth: "+8%", growthColor: "text-yellow-400" },
    ],
    peakHours: [
      { period: "09:00 - 11:00", engagement: "Alto", engagementColor: "text-white" },
      { period: "12:00 - 14:00", engagement: "Muito Alto", engagementColor: "text-green-400" },
      { period: "18:00 - 20:00", engagement: "Alto", engagementColor: "text-white" },
      { period: "21:00 - 23:00", engagement: "Muito Alto", engagementColor: "text-green-400" },
    ],
  },
  roiByPlatform: [
    { name: "Instagram", icon: <FaInstagram size={20}/>, roi: "R$ 4.50", description: "por R$ 1 investido" },
    { name: "Facebook", icon: <FaFacebook className="text-blue-500" size={20}/>, roi: "R$ 3.20", description: "por R$ 1 investido" },
    { name: "TikTok", icon: <FaTiktok/>, roi: "R$ 5.80", description: "por R$ 1 investido" },
    { name: "YouTube", icon: <FaYoutube/>, roi: "R$ 2.90", description: "por R$ 1 investido" },
  ],
  conversionsLeads: {
    conversionRate: { label: "Taxa de Conversão Geral", value: "3.8%", percent: 38, colorClass: "bg-green-500" },
    leadsGenerated: { label: "Leads Gerados", value: "1,247", note: "Este mês: +18% vs mês anterior" },
    costPerLead: {
      label: "Custo por Lead",
      value: "R$ 12.50",
      note: "Média das plataformas",
      colorClass: "text-yellow-400",
    },
    lifetimeValue: {
      label: "Valor Vitalício do Cliente",
      value: "R$ 450",
      note: "LTV médio",
      colorClass: "text-green-400",
    },
  },
  customReports: [
    {
      id: "engagement",
      icon: <FaHeart className="text-pink-500" size={24} />,

      title: "Relatório de Engajamento",
      desc: "Análise detalhada de curtidas, comentários e compartilhamentos",
    },
    {
      id: "audience",
      icon: <FaUsers className="text-blue-500" size={24} />,

      title: "Relatório de Audiência",
      desc: "Demografia, interesses e comportamento da audiência",
    },
    {
      id: "content",
      icon: <FaCamera className="text-green-500" size={24} />,

      title: "Relatório de Conteúdo",
      desc: "Performance por tipo de conteúdo e temas",
    },
    {
      id: "competitor",
      icon: <FaChartSimple className="text-purple-500" size={24} />,

      title: "Análise Competitiva",
      desc: "Comparação com concorrentes do setor",
    },
    {
      id: "roi",
      icon: <FaDollarSign className="text-yellow-500" size={24} />,

      title: "Relatório de ROI",
      desc: "Retorno sobre investimento detalhado",
    },
    {
      id: "trends",
      icon: <HiOutlineTrendingUp className="text-red-500" size={24} />,
      title: "Relatório de Tendências",
      desc: "Tendências emergentes e oportunidades",
    },
  ],
};
