import { getApiStatus } from "@/api/status";
import type { StatusReponse } from "@/types/apiStatus";
import { Key } from "lucide-react";
import { useState } from "react";
import { FaPlug } from "react-icons/fa6";

export const AiConnectionTest = () => {
  const [res, setRes] = useState<StatusReponse>();
  const [loading, setLoading] = useState(false);
  const testApiConnection = async () => {
    setLoading(true);
    try {
      const data = await getApiStatus();
      setRes(data);
    } catch (e) {
      return e;
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg mb-6 border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-bold text-white flex items-center">
          <Key className="text-yellow-400 mr-2" />
          Configuração da API
        </h3>
      </div>
      <div className="p-4">
        <div className="flex items-center flex-col ">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-700"></div>
            </div>
          ) : (
            <div className="flex items-center space-x-2 flex-col">
              <label className="block text-gray-300" htmlFor="apiStatus">
                Status da API: {res?.ai_service.ai.status}
              </label>
              {!res ? (
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-gray-500" id="apiStatus"></div>
                  <span className="text-gray-400 text-sm">Não testada</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 rounded-full bg-green-800 animate-pulse" id="apiStatus"></div>
                  <span className="text-white font-bold text-sm">Online</span>
                </div>
              )}
            </div>
          )}
          <div id="apiStatus" className="flex items-center">
            <button
              onClick={testApiConnection}
              className="mt-4 bg-gradient-to-r flex items-center from-blue-600 to-blue-700 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out rounded-lg px-4 py-2 text-white font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FaPlug className="mr-2" />
              Testar Conexão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
