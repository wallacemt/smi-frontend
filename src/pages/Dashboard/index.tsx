import { PlatformCard } from "@/components/PlatformCard";
import { SummaryCard } from "@/components/SumaryCard";
import { Users, Camera, Eye, Heart } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Dashboard() {
  const summaryData = [
    {
      title: "Seguidores Totais",
      value: "127.5K",
      change: "+8.3% este mês",
      icon: <Users className="text-blue-400 text-xl" />,
      iconBg: "bg-blue-900",
      borderColor: "border-blue-500",
      textColor: "text-green-400",
    },
    {
      title: "Engajamento Médio",
      value: "4.7%",
      change: "+1.2% este mês",
      icon: <Heart className="text-green-400 text-xl" />,
      iconBg: "bg-green-900",
      borderColor: "border-green-500",
      textColor: "text-green-400",
    },
    {
      title: "Posts Este Mês",
      value: "89",
      change: "Todas as redes",
      icon: <Camera className="text-purple-400 text-xl" />,
      iconBg: "bg-purple-900",
      borderColor: "border-purple-500",
      textColor: "text-purple-400",
    },
    {
      title: "Alcance Total",
      value: "2.3M",
      change: "Este mês",
      icon: <Eye className="text-yellow-400 text-xl" />,
      iconBg: "bg-yellow-900",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-400",
    },
  ];

  const platformData = [
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-2xl mr-3" />,
      color: "text-green-400",
      stats: [
        { label: "Seguidores", value: "45.2K" },
        { label: "Engajamento", value: "5.8%" },
        { label: "Posts", value: "28" },
      ],
      growth: "+12.5%",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-2xl mr-3" />,
      color: "text-green-400",
      stats: [
        { label: "Seguidores", value: "38.7K" },
        { label: "Engajamento", value: "3.2%" },
        { label: "Posts", value: "22" },
      ],
      growth: "+6.8%",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="text-white text-2xl mr-3" />,
      color: "text-green-400",
      stats: [
        { label: "Seguidores", value: "32.8K" },
        { label: "Engajamento", value: "8.4%" },
        { label: "Vídeos", value: "15" },
      ],
      growth: "+24.1%",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="text-red-500 text-2xl mr-3" />,
      color: "text-green-400",
      stats: [
        { label: "Inscritos", value: "10.8K" },
        { label: "Visualizações", value: "245K" },
        { label: "Vídeos", value: "24" },
      ],
      growth: "+15.3%",
    },
  ];
  return (
    <section id="dashboard" className="transition-opacity max-w-6xl mx-auto flex flex-col gap-4 duration-300 ease-in-out px-4">
      <div className="mb-6 mt-8">
        <h2 className="text-2xl font-bold text-white mb-2">Dashboard de Redes Sociais</h2>
        <p className="text-gray-400">Análise completa do desempenho nas principais plataformas sociais</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6">
        {summaryData.map((item, idx) => (
          <SummaryCard key={idx} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6">
        {platformData.map((platform, idx) => (
          <PlatformCard key={idx} {...platform} />
        ))}
      </div>
    </section>
  );
}
