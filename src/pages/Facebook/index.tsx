import React from "react";
// import ChartCard from "./ChartCard";

import { FaThumbsUp, FaEye, FaHeart, FaShare, FaFacebook } from "react-icons/fa";
import MetricCard from "@/components/Instagram/MetricCard";
import PostCard from "@/components/Facebook/PostCard";
import EventCard from "@/components/Facebook/EventCard";

const FacebookAnalytics: React.FC = () => {
  const metrics = [
    {
      title: "Curtidas da Página",
      value: "38.7K",
      change: "+234 esta semana",
      icon: <FaThumbsUp className="text-blue-400 text-xl" />,
      bgIcon: "bg-blue-900",
      borderColor: "border-blue-500",

      bgColor: "bg-blue-900",
      changeColor: "text-green-400",
    },
    {
      title: "Alcance",
      value: "15.8K",
      change: "Semanal",
      icon: <FaEye className="text-green-400 text-xl" />,
      bgIcon: "bg-green-900",
      borderColor: "border-green-500",
      bgColor: "bg-green-900",
      changeColor: "text-yellow-400",
    },
    {
      title: "Engajamento",
      value: "3.2%",
      change: "+0.5% este mês",
      icon: <FaHeart className="text-purple-400 text-xl" />,
      bgIcon: "bg-purple-900",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-900",
      changeColor: "text-green-400",
    },
    {
      title: "Compartilhamentos",
      value: "456",
      change: "Este mês",
      icon: <FaShare className="text-yellow-400 text-xl" />,
      bgIcon: "bg-yellow-900",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-900",
      changeColor: "text-green-400",
    },
  ];

  const posts = [
    {
      text: "Descubra os melhores pontos turísticos do Baixio! 🏖️",
      likes: "1.2K",
      comments: 45,
      shares: 23,
    },
    {
      text: "Festival de Gastronomia - Não perca! 🍽️",
      likes: "2.1K",
      comments: 78,
      shares: 56,
    },
    {
      text: "Dicas de hospedagem para suas férias 🏨",
      likes: "890",
      comments: 34,
      shares: 12,
    },
     {
      text: "Dicas para suas férias 🏨",
      likes: "890",
      comments: 34,
      shares: 12,
    },
  ];

  const events = [
    {
      title: "Festival de Verão",
      date: "15 Jan",
      description: "Música, dança e gastronomia na praia",
      interested: 234,
      confirmed: 89,
    },
    {
      title: "Tour Gastronômico",
      date: "22 Jan",
      description: "Conheça os sabores locais",
      interested: 156,
      confirmed: 45,
    },
    {
      title: "Trilha Ecológica",
      date: "28 Jan",
      description: "Aventura na natureza",
      interested: 98,
      confirmed: 32,
    },
  ];

  return (
    <section className="section max-w-6xl mx-auto mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
          <FaFacebook className="fab fa-facebook text-blue-600 mr-3" />
          Análise do Facebook
        </h2>
        <p className="text-gray-400">Métricas da página BaixioTurismo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Alcance vs Engajamento" chartId="facebookReachChart" />
        <ChartCard title="Demografia da Audiência" chartId="facebookDemographicsChart" />
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">Posts Recentes</h3>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">Eventos Próximos</h3>
          <div className="space-y-4">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookAnalytics;
