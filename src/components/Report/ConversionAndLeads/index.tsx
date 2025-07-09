import type { ConversionsLeadsData } from "@/types/reports";

interface ConversionsAndLeadsProps {
  data: ConversionsLeadsData;
}
export const ConversionsAndLeads = ({ data }: ConversionsAndLeadsProps) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700 mb-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
    {/* Taxa de Conversão */}
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-24 h-24 rounded-full ${data.conversionRate.colorClass} flex items-center justify-center text-3xl font-bold`}
      >
        {data.conversionRate.value}
      </div>
      <div className="mt-2 text-center text-gray-300">{data.conversionRate.label}</div>
    </div>

    {/* Leads Gerados */}
    <div>
      <h4 className="text-white font-semibold">{data.leadsGenerated.label}</h4>
      <div className="text-2xl font-bold">{data.leadsGenerated.value}</div>
      <div className="text-yellow-400 text-sm mt-1">{data.leadsGenerated.note}</div>
    </div>

    {/* Custo por Lead */}
    <div>
      <h4 className="text-white font-semibold">{data.costPerLead.label}</h4>
      <div className={`text-2xl font-bold ${data.costPerLead.colorClass}`}>{data.costPerLead.value}</div>
      <div className="text-gray-400 text-sm mt-1">{data.costPerLead.note}</div>
    </div>

    {/* Valor Vitalício */}
    <div>
      <h4 className="text-white font-semibold">{data.lifetimeValue.label}</h4>
      <div className={`text-2xl font-bold ${data.lifetimeValue.colorClass}`}>{data.lifetimeValue.value}</div>
      <div className="text-gray-400 text-sm mt-1">{data.lifetimeValue.note}</div>
    </div>
  </div>
);
