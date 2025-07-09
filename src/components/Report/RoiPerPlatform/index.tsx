import type { ROIDetail } from "@/types/reports";

interface ROIPerPlatformProps {
  data: ROIDetail[];
}
export const ROIPerPlatform = ({ data }: ROIPerPlatformProps) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 mb-6">
      <h3 className="text-lg font-bold text-white mb-4">ROI por Plataforma</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(({ name, icon, roi, description }) => (
          <div
            key={name}
            className="bg-gray-700 p-4 rounded-lg flex flex-col items-center"
          >
            {icon}
            <div className="text-white font-bold text-xl">{roi}</div>
            <div className="text-gray-400 text-sm">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
