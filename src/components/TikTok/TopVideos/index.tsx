import type { Video } from "@/types/tiktok";
import React from "react";
interface Props {
  videos: Video[];
}

const TopVideos: React.FC<Props> = ({ videos }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
    <h3 className="text-lg font-bold text-white mb-4">Vídeos com Melhor Performance</h3>
    <div className="space-y-4">
      {videos.map((video, idx) => (
        <div key={idx} className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className={`w-16 h-16 ${video.iconBg} rounded-lg flex items-center justify-center`}>
              <i className="fas fa-play text-white text-xl" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium mb-1">{video.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{video.description}</p>
              <div className="flex space-x-4 text-xs text-gray-400">
                <span>
                  <i className="fas fa-play mr-1" />
                  {video.views}
                </span>
                <span>
                  <i className="fas fa-heart mr-1" />
                  {video.likes}
                </span>
                <span>
                  <i className="fas fa-share mr-1" />
                  {video.shares}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TopVideos;
