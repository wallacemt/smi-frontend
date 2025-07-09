import { AiConnectionTest } from "@/components/AiAnalyzer/AiConnectionTest";
import { ComparingAnalyzer } from "@/components/AiAnalyzer/ComparingAnallyzer";
import { ProfileAnalyser } from "@/components/AiAnalyzer/ProfieAnalyser";
import { Lightbulb } from "lucide-react";
import { FaRobot } from "react-icons/fa";

const AiAnalyzer = () => {
  return (
    <section id="ai-analyzer" className="max-w-[90%] h-full mx-auto bg-background py-8 px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
          <FaRobot className="text-purple-400 mr-3" />
          Analisador de Perfis com IA
        </h2>
        <p className="text-gray-400">Análise inteligente de perfis de redes sociais usando Gemini AI</p>
      </div>
      <AiConnectionTest />
      <ProfileAnalyser />
      <ComparingAnalyzer />
      <div id="generalInsights" className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 hidden">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold text-white flex items-center">
            <Lightbulb className="text-yellow-400 mr-2" />
            Insights Gerais da IA
          </h3>
        </div>
        <div className="p-4">
          <div id="insightsContent"></div>
        </div>
      </div>
    </section>
  );
};

export default AiAnalyzer;
