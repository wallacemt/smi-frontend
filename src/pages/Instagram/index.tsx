import React from "react";
import MetricCard from "./MetricCard";
import ChartCard from "./ChartCard";
import TopPostCard from "./TopPostCard";
import HashtagBadge from "./HashtagBadge";
import BestTimeRow from "./BestTimeRow";

export default function InstagramAnalytics() {
  const metrics = [
    {
      title: "Seguidores",
      value: "45.2K",
      change: "+567 esta semana",
      icon: "fas fa-users",
      iconColor: "text-pink-400",
      borderColor: "border-pink-500",
      bgIcon: "bg-pink-900",
      changeColor: "text-green-400",
    },
    {
      title: "Engajamento",
      value: "5.8%",
      change: "+0.3% este mês",
      icon: "fas fa-heart",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500",
      bgIcon: "bg-purple-900",
      changeColor: "text-green-400",
    },
    {
      title: "Alcance Médio",
      value: "28.5K",
      change: "Por post",
      icon: "fas fa-eye",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500",
      bgIcon: "bg-blue-900",
      changeColor: "text-yellow-400",
    },
    {
      title: "Stories Views",
      value: "12.3K",
      change: "Média diária",
      icon: "fas fa-play-circle",
      iconColor: "text-green-400",
      borderColor: "border-green-500",
      bgIcon: "bg-green-900",
      changeColor: "text-green-400",
    },
  ];

  const posts = [
    {
      title: "Pôr do sol na praia do Baixio",
      icon: "fas fa-image",
      bgGradient: "from-pink-500 to-purple-600",
      likes: "2.3K",
      comments: 89,
      shares: 45,
    },
    {
      title: "Tour gastronômico - Reels",
      icon: "fas fa-video",
      bgGradient: "from-blue-500 to-teal-600",
      likes: "4.1K",
      comments: 156,
      shares: 78,
    },
    {
      title: "Dicas de hospedagem",
      icon: "fas fa-camera",
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
    <section className="section">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
          <i className="fab fa-instagram text-pink-500 mr-3"></i>
          Análise do Instagram
        </h2>
        <p className="text-gray-400">Métricas detalhadas do perfil @baixioturismo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Crescimento de Seguidores" chartId="instagramFollowersChart" />
        <ChartCard title="Engajamento por Tipo de Post" chartId="instagramEngagementChart" />
      </div>

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
    </section>
  );
}
