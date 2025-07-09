const ChartCard = ({ title, chartId }: { title: string; chartId: string }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <div className="chart-container">
      <canvas id={chartId}></canvas>
    </div>
  </div>
);

export default ChartCard;
