import { mockData } from "../mockData";
import { SelectFilter } from "../SelectFilters";

export const ReportFilters = ({ onGenerate }: { onGenerate: () => void }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 mb-6">
    <h3 className="text-lg font-bold text-white mb-4">Filtros de Análise</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <SelectFilter label="Período:" options={mockData.reportPeriods} id="reportPeriod" />
      <SelectFilter label="Plataformas:" options={mockData.platforms} id="reportPlatforms" />
      <SelectFilter label="Métrica Principal:" options={mockData.metrics} id="reportMetric" />
      <div className="flex items-end">
        <button
          onClick={onGenerate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <i className="fas fa-chart-bar mr-2"></i>Gerar Relatório
        </button>
      </div>
    </div>
  </div>
);