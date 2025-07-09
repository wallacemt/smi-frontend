import React from "react";

const PerformanceChart: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
      <h3 className="text-lg font-bold text-white mb-4">Performance dos Últimos 30 Dias</h3>
      <div className="chart-container">
        <canvas id="tiktokPerformanceChart" />
      </div>
    </div>
  );
};

export default PerformanceChart;
