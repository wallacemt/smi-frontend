import type { ContentAnalysisData } from "@/types/reports";

interface ContentAnalysisProps {
  data: ContentAnalysisData;
}
export const ContentAnalysis = ({ data }: ContentAnalysisProps) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 mb-6">
    <h3 className="text-lg font-bold text-white mb-4">Análise de Conteúdo</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Tipos de Conteúdo */}
      <div>
        <h4 className="text-white font-medium mb-3">Tipos de Conteúdo Mais Engajados</h4>
        <div className="space-y-2">
          {data.types.map(({ name, percent, colorClass }) => (
            <div key={name} className="flex justify-between items-center">
              <span className="text-gray-300">{name}</span>
              <div className="flex items-center">
                <div className="w-20 bg-gray-700 rounded-full h-2 mr-2">
                  <div className={`${colorClass} h-2 rounded-full`} style={{ width: `${percent}%` }} />
                </div>
                <span className="text-white text-sm">{percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Temas Populares */}
      <div>
        <h4 className="text-white font-medium mb-3">Temas Mais Populares</h4>
        <div className="space-y-2">
          {data.popularThemes.map(({ name, growth, growthColor }) => (
            <div key={name} className="bg-gray-700 p-2 rounded flex justify-between">
              <span className="text-gray-300">{name}</span>
              <span className={growthColor}>{growth}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Horários de Engajamento */}
      <div>
        <h4 className="text-white font-medium mb-3">Horários de Maior Engajamento</h4>
        <div className="space-y-2">
          {data.peakHours.map(({ period, engagement, engagementColor }) => (
            <div key={period} className={`bg-gray-700 p-2 rounded flex justify-between`}>
              <span className="text-gray-300">{period}</span>
              <span className={engagementColor}>{engagement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
