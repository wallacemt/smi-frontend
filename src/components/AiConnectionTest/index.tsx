import { Key } from "lucide-react";
import { FaPlug } from "react-icons/fa6";

export const AiConnectionTest = () => {
  const testApiConnection = () => {};
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
          <div className="flex items-center space-x-2">
            <label className="block text-gray-300" htmlFor="apiStatus">
              Status da API:
            </label>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-gray-500" id="apiStatus"></div>
              <span className="text-gray-400 text-sm">Não testada</span>
            </div>
          </div>
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
