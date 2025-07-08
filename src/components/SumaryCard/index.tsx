interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconBg: string;
  borderColor: string;
  textColor: string;
}
export const SummaryCard = ({ title, value, change, icon, iconBg, borderColor, textColor }: SummaryCardProps) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 ${borderColor} card-indicator`}>
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <h3 className="text-xl font-bold text-white mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${textColor}`}>{change}</p>
      </div>
      <div className={`${iconBg} w-12 h-12 rounded-full flex items-center justify-center`}>{icon}</div>
    </div>
  </div>
);
