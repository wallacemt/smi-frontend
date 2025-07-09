const BestTimeRow = ({ time, percentage }: { time: string; percentage: number }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-300">{time}</span>
    <div className="w-32 bg-gray-700 rounded-full h-2">
      <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
    <span className="text-white text-sm">{percentage}%</span>
  </div>
);

export default BestTimeRow;
