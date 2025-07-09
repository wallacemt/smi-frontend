import { youtubeCards, popularVideos, trafficSources, demographics } from "@/components/Youtube/mockData";
import { FaPlay, FaThumbsUp, FaComment, FaYoutube } from "react-icons/fa";

const YouTubeAnalytics = () => {
  return (
    <section className="section max-w-6xl px-2 mx-auto mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
          <span className="text-red-500 mr-3 text-2xl">
            <FaYoutube />
          </span>
          Análise do YouTube
        </h2>
        <p className="text-gray-400">Canal BaixioTurismo - Métricas detalhadas</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {youtubeCards.map((card, idx) => (
          <div key={idx} className={`bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 ${card.borderColor}`}>
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{card.title}</p>
                <h3 className="text-xl font-bold text-white mt-1">{card.value}</h3>
                <p className="text-sm text-green-400 mt-1">{card.subtext}</p>
              </div>
              <div className="p-3 bg-opacity-20 rounded-full">{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Vídeos Populares + Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Vídeos Populares */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">Vídeos Mais Populares</h3>
          <div className="space-y-4">
            {popularVideos.map((video, idx) => (
              <div key={idx} className="bg-gray-700 rounded-lg p-4 flex items-center space-x-3">
                <div
                  className={`w-20 h-12 bg-gradient-to-br ${video.gradient} rounded flex items-center justify-center`}
                >
                  <FaPlay className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-1">{video.title}</h4>
                  <div className="flex space-x-4 text-xs text-gray-400">
                    <span>
                      <FaPlay className="inline mr-1" />
                      {video.views}
                    </span>
                    <span>
                      <FaThumbsUp className="inline mr-1" />
                      {video.likes}
                    </span>
                    <span>
                      <FaComment className="inline mr-1" />
                      {video.comments}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm">{video.duration}</div>
                  <div className="text-gray-400 text-xs">{video.postedAgo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Detalhados */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">Analytics Detalhados</h3>

          {/* Fontes de Tráfego */}
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Fontes de Tráfego</h4>
            <div className="space-y-2">
              {trafficSources.map((src, i) => (
                <div key={i} className="flex justify-between text-gray-300">
                  <span>{src.label}</span>
                  <span className="text-white">{src.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demografia */}
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Demografia</h4>
            <div className="space-y-2">
              {demographics.map((d, i) => (
                <div key={i} className="flex justify-between text-gray-300">
                  <span>{d.ageRange}</span>
                  <span className="text-white">{d.percentage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Retenção Média */}
          <div>
            <h4 className="text-white font-medium mb-2">Retenção Média</h4>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-red-500 h-4 rounded-full flex items-center justify-center text-white text-xs"
                style={{ width: "68%" }}
              >
                68%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de Crescimento (placeholder) */}
      {/* <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">Crescimento do Canal</h3>
        <div className="chart-container">
          <canvas id="youtubeGrowthChart" />
        </div>
      </div> */}
    </section>
  );
};

export default YouTubeAnalytics;
