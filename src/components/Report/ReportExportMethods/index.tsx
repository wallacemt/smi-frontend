import { FaClock, FaFile, FaFileCsv, FaFileExcel } from "react-icons/fa6";

export const ReportExportMethods = () => {
  const exportReport = (format: string) => {
    console.log(`Exportando relatório para o formato ${format}`);
  };

  const scheduleReport = () => {
    console.log("Agendando envio do relatório");
  };

  const ExportButton = ({
    children,
    onClick,
    className,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={` text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
      <h3 className="text-lg font-bold text-white mb-4">Exportar Relatórios</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ExportButton
          onClick={() => exportReport("pdf")}
          className="bg-red-600 hover:bg-red-700"
        >
          <FaFile className="mr-2" />
          Exportar PDF
        </ExportButton>
        <ExportButton
          onClick={() => exportReport("excel")}
          className="bg-green-600 hover:bg-green-700"
        >
          <FaFileExcel className="mr-2" />
          Exportar Excel
        </ExportButton>
        <ExportButton
          onClick={() => exportReport("csv")}
          className="bg-blue-800 hover:bg-blue-900"
        >
          <FaFileCsv className="mr-2" />
          Exportar CSV
        </ExportButton>
        <ExportButton
          onClick={scheduleReport}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <FaClock className="mr-2" />
          Agendar Envio
        </ExportButton>
      </div>
    </div>
  );
};
