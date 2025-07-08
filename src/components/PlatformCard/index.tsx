interface PlatformCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  stats: { label: string; value: string }[];
  growth: string;
}
export const PlatformCard = ({ name, icon, color, stats, growth }: PlatformCardProps) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 card-indicator">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {icon}
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
      <span className={`text-sm ${color}`}>{growth}</span>
    </div>
    <div className="space-y-2">
      {stats.map((item, idx) => (
        <div key={idx} className="flex justify-between">
          <span className="text-gray-400">{item.label}:</span>
          <span className="text-white font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);
