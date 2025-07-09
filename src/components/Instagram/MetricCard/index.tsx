interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  borderColor: string;
  bgIcon: string;
  changeColor: string;
}
const MetricCard = ({ title, value, change, icon, borderColor, bgIcon, changeColor }: MetricCardProps) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 ${borderColor}`}>
    <div className="flex justify-between">
      <div>
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <h3 className="text-xl font-bold text-white mt-1">{value}</h3>
        <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>
      </div>
      <div className={`${bgIcon} w-12 h-12  flex items-center justify-center rounded-full`}>{icon}</div>
    </div>
  </div>
);

export default MetricCard;
