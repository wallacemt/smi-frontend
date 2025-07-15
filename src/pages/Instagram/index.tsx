import BestTimeRow from "@/components/Instagram/BestTimeRow";

// import ChartCard from "@/components/Instagram/ChartCard";
import HashtagBadge from "@/components/Instagram/HashtagBadge";
import MetricCard from "@/components/Instagram/MetricCard";
import TopPostCard from "@/components/Instagram/TopPostCard";
import { SiteHeader } from "@/components/ui/site-header";
import { Camera, Image, VideoIcon } from "lucide-react";
import { FaEye, FaHeart, FaInstagram, FaPlayCircle, FaUser } from "react-icons/fa";

export default function InstagramAnalytics() {
  const metrics = [
    {
      title: "Seguidores",
      value: "45.2K",
      change: "+567 esta semana",
      icon: <FaUser className="text-pink-400" size={24} />,
      borderColor: "border-pink-500",
      bgIcon: "bg-pink-900",
      changeColor: "text-green-400",
    },
    {
      title: "Engajamento",
      value: "5.8%",
      change: "+0.3% este mês",
      icon: <FaHeart className="text-purple-400" size={24} />,
      borderColor: "border-purple-500",
      bgIcon: "bg-purple-900",
      changeColor: "text-green-400",
    },
    {
      title: "Alcance Médio",
      value: "28.5K",
      change: "Por post",
      icon: <FaEye className="text-blue-400" size={24} />,
      borderColor: "border-blue-500",
      bgIcon: "bg-blue-900",
      changeColor: "text-yellow-400",
    },
    {
      title: "Stories Views",
      value: "12.3K",
      change: "Média diária",
      icon: <FaPlayCircle className="text-green-400" size={24} />,
      borderColor: "border-green-500",
      bgIcon: "bg-green-900",
      changeColor: "text-green-400",
    },
  ];

  const posts = [
    {
      title: "Pôr do sol na praia do Baixio",
      icon: <Image size={50} />,
      bgGradient: "from-pink-500 to-purple-600",
      likes: "2.3K",
      comments: 89,
      shares: 45,
    },
    {
      title: "Tour gastronômico - Reels",
      icon: <VideoIcon size={50} />,
      bgGradient: "from-blue-500 to-teal-600",
      likes: "4.1K",
      comments: 156,
      shares: 78,
    },
    {
      title: "Dicas de hospedagem",
      icon: <Camera size={50} />,
      bgGradient: "from-yellow-500 to-orange-600",
      likes: "1.8K",
      comments: 67,
      shares: 34,
    },
  ];

  const hashtags = ["#baixioturismo", "#turismo", "#praia", "#gastronomia", "#viagem", "#nordeste"];

  const bestTimes = [
    { time: "09:00 - 10:00", percentage: 85 },
    { time: "12:00 - 13:00", percentage: 92 },
    { time: "18:00 - 19:00", percentage: 78 },
    { time: "21:00 - 22:00", percentage: 88 },
  ];

  return (
    <section className="section max-w-6xl mx-auto px-2">
      <div className="mb-6">
        <SiteHeader
          title="Análise do Instagram"
          icon={<FaInstagram className="fab fa-instagram text-pink-500 mr-3" />}
        />
        <p className="text-gray-400 ml-12">Métricas detalhadas do perfil @baixioturismo</p>
      </div>
      <div className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
{/* 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartCard title="Crescimento de Seguidores" chartId="instagramFollowersChart" />
          <ChartCard title="Engajamento por Tipo de Post" chartId="instagramEngagementChart" />
        </div> */}

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-white mb-4">Posts com Melhor Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <TopPostCard key={index} {...post} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">Top Hashtags</h3>
            <div className="flex flex-wrap gap-2">
              {hashtags.map((tag, index) => (
                <HashtagBadge key={index} tag={tag} />
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4">Melhores Horários</h3>
            <div className="space-y-3">
              {bestTimes.map((time, index) => (
                <BestTimeRow key={index} {...time} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
