import { ConversionsAndLeads } from "@/components/Report/ConversionAndLeads";
import { CustomReports } from "@/components/Report/CustomReports";
import { mockData } from "@/components/Report/mockData";
import { PlatformGrowthList } from "@/components/Report/PlatformGrowthList";
import { ContentAnalysis } from "@/components/Report/PlatformGrowthList/ContentAnaysis";
import { ReportExportMethods } from "@/components/Report/ReportExportMethods";
import { ReportFilters } from "@/components/Report/ReportFilters";
import { ROIPerPlatform } from "@/components/Report/RoiPerPlatform";
import { useState } from "react";
import { FaChartLine } from "react-icons/fa";

export default function RelatorioMarketing() {
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = () => {
    setLoading(true);
    setTimeout(() => {
      alert("Relatório gerado com sucesso!");
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="section max-w-6xl mx-auto px-2 mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
          <FaChartLine className="fab fa-facebook text-blue-600 mr-3" />
          Relatório de Marketing Digital
        </h2>
      </div>

      <ReportFilters onGenerate={handleGenerateReport} />

      <section className="mb-10">
        <h3 className="text-xl font-bold mb-4">Crescimento das Plataformas</h3>
        <PlatformGrowthList data={mockData.platformGrowth} />
      </section>

      <ContentAnalysis data={mockData.contentAnalysis} />

      <ROIPerPlatform data={mockData.roiByPlatform} />

      <ConversionsAndLeads data={mockData.conversionsLeads} />

      <CustomReports reports={mockData.customReports} />

      <ReportExportMethods />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-semibold z-50">
          Gerando relatório...
        </div>
      )}
    </section>
  );
}
