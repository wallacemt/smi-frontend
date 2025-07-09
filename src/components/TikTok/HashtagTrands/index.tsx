import type { HashtagData } from "@/types/tiktok";
import React from "react";

interface Props {
  data: HashtagData;
}

const HashtagTrends: React.FC<Props> = ({ data }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
    <h3 className="text-lg font-bold text-white mb-4">Tendências e Hashtags</h3>

    <div className="space-y-4">
      {/* Hashtags populares */}
      <div>
        <h4 className="text-white font-medium mb-2">Hashtags Populares</h4>
        <div className="flex flex-wrap gap-2">
          {data.popular.map((tag, idx) => (
            <span key={idx} className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tendências ativas */}
      <div>
        <h4 className="text-white font-medium mb-2">Tendências Ativas</h4>
        <div className="space-y-2">
          {data.trends.map((trend, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-700 p-2 rounded">
              <span className="text-gray-300">#{trend.name}</span>
              <span className="text-green-400 text-sm">{trend.growth}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Melhores horários */}
      <div>
        <h4 className="text-white font-medium mb-2">Melhores Horários</h4>
        <div className="space-y-2">
          {data.bestTimes.map((timeSlot, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-gray-300">{timeSlot.time}</span>
              <div className="w-24 bg-gray-700 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${timeSlot.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HashtagTrends;
