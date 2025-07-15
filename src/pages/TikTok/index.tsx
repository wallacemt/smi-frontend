import React from "react";
import { FaUsers, FaPlay, FaHeart, FaShare, FaTiktok } from "react-icons/fa";

// import PerformanceChart from "@/components/TikTok/PerformanceChart";
import MetricCard from "@/components/Instagram/MetricCard";
import TopVideos from "@/components/TikTok/TopVideos";
import HashtagTrends from "@/components/TikTok/HashtagTrands";
import type { HashtagData, Metric, Video } from "@/types/tiktok";
import { SiteHeader } from "@/components/ui/site-header";

const metrics: Metric[] = [
  {
    title: "Seguidores",
    value: "32.8K",
    change: "+1.2K esta semana",
    icon: <FaUsers className="text-white text-xl" />,
    borderColor: "border-white",
    bgIcon: "bg-gray-700",
    changeColor: "text-green-400",
  },
  {
    title: "Visualizações",
    value: "2.1M",
    change: "Este mês",
    icon: <FaPlay className="text-pink-400 text-xl" />,
    borderColor: "border-pink-500",
    bgIcon: "bg-pink-900",
    changeColor: "text-yellow-400",
  },
  {
    title: "Curtidas",
    value: "156K",
    change: "+12K esta semana",
    icon: <FaHeart className="text-red-400 text-xl" />,
    borderColor: "border-red-500",
    bgIcon: "bg-red-900",
    changeColor: "text-green-400",
  },
  {
    title: "Compartilhamentos",
    value: "8.9K",
    change: "Este mês",
    icon: <FaShare className="text-yellow-400 text-xl" />,
    borderColor: "border-yellow-500",
    bgIcon: "bg-yellow-900",
    changeColor: "text-yellow-400",
  },
];

const topVideos: Video[] = [
  {
    title: "Pôr do sol em 15 segundos",
    description: "Timelapse da praia do Baixio",
    views: "245K",
    likes: "18.2K",
    shares: "1.2K",
    iconBg: "bg-gradient-to-br from-pink-500 to-purple-600",
  },
  {
    title: "Comida típica challenge",
    description: "Experimentando pratos locais",
    views: "189K",
    likes: "15.6K",
    shares: "890",
    iconBg: "bg-gradient-to-br from-blue-500 to-teal-600",
  },
  {
    title: "Dança folclórica",
    description: "Cultura local em movimento",
    views: "167K",
    likes: "12.4K",
    shares: "756",
    iconBg: "bg-gradient-to-br from-green-500 to-blue-600",
  },
];

const hashtagData: HashtagData = {
  popular: ["baixioturismo", "fyp", "praia", "viral", "nordeste", "turismo"],
  trends: [
    { name: "VerãoNordeste", growth: "+245%" },
    { name: "GastronomiaLocal", growth: "+189%" },
    { name: "TurismoSustentável", growth: "+156%" },
  ],
  bestTimes: [
    { time: "19:00 - 21:00", percent: 95 },
    { time: "12:00 - 14:00", percent: 78 },
    { time: "22:00 - 23:00", percent: 82 },
  ],
};

const TikTokAnalytics: React.FC = () => {
  return (
    <section className="section max-w-6xl mx-auto px-2">
      <div className="mb-6">
        <SiteHeader title="Análise do TikTok" icon={<FaTiktok color="#f2f2f2" className="mr-3" />} />
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center"></h2>
        <p className="text-gray-400 ml-12">Métricas do perfil @baixioturismo</p>
      </div>

      <div className="p-2">
        {/* Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} {...metric} />
          ))}
        </div>
        {/* Vídeos e Tendências */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TopVideos videos={topVideos} />
          <HashtagTrends data={hashtagData} />
        </div>
      </div>

    </section>
  );
};

export default TikTokAnalytics;
