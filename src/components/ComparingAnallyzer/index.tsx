import { ChartLine } from "lucide-react";
import { FaBalanceScale } from "react-icons/fa";

export const ComparingAnalyzer = () => {
  const compareProfiles = () => {};
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg mb-6 border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-bold text-white flex items-center">
          <FaBalanceScale className="text-green-400 mr-2" />
          Análise Comparativa
        </h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-300 mb-2">Perfil 1:</label>
            <select id="compareProfile1" className="profile-input">
              <option value="">Selecione um perfil analisado</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Perfil 2:</label>
            <select id="compareProfile2" className="profile-input">
              <option value="">Selecione um perfil analisado</option>
            </select>
          </div>
        </div>
        <button onClick={compareProfiles} className="analyze-btn flex">
          <ChartLine className="mr-2" />
          Comparar Perfis
        </button>
        <div id="comparisonResult" className="mt-4"></div>
      </div>
    </div>
  );
};
