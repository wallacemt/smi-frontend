import type { CustomReport } from "@/types/reports";

interface CustomReportsProps {
  reports: CustomReport[];
}
export const CustomReports = ({ reports }: CustomReportsProps) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
    <h3 className="text-lg font-bold text-white mb-4">Relatórios Personalizados</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reports.map(({ id, icon, title, desc }) => (
        <div key={id} className="bg-gray-700 p-4 rounded-lg flex items-start space-x-4">
          {icon}
          <div>
            <h4 className="text-white font-semibold">{title}</h4>
            <p className="text-gray-400 text-sm">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
