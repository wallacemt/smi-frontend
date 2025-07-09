export interface ReportPeriod {
  value: string;
  label: string;
  selected?: boolean;
}

export interface PlatformOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface MetricOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface PlatformGrowthItem {
  name: string;
  icon: React.ReactNode;
  followers: string;
  growth: string; // e.g. "+12.5%"
}

export interface ContentType {
  name: string;
  percent: number; // 0-100
  colorClass: string; // ex: "bg-blue-500"
}

export interface PopularTheme {
  name: string;
  growth: string; // e.g. "+23%"
  growthColor: string; // ex: "text-green-400"
}

export interface PeakHour {
  period: string; // e.g. "09:00 - 11:00"
  engagement: string; // e.g. "Alto", "Muito Alto"
  engagementColor: string; // ex: "text-white"
}

export interface ContentAnalysisData {
  types: ContentType[];
  popularThemes: PopularTheme[];
  peakHours: PeakHour[];
}

export interface ROIDetail {
  name: string;
  icon: React.ReactNode;
  roi: string; // ex: "R$ 4.50"
  description: string; // ex: "por R$ 1 investido"
}

export interface ConversionLeadMetric {
  label: string;
  value: string;
  percent?: number; // optional, e.g. 38
  colorClass?: string;
  note?: string;
}

export interface ConversionsLeadsData {
  conversionRate: ConversionLeadMetric;
  leadsGenerated: ConversionLeadMetric;
  costPerLead: ConversionLeadMetric;
  lifetimeValue: ConversionLeadMetric;
}

export interface CustomReport {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface MockData {
  reportPeriods: ReportPeriod[];
  platforms: PlatformOption[];
  metrics: MetricOption[];
  platformGrowth: PlatformGrowthItem[];
  contentAnalysis: ContentAnalysisData;
  roiByPlatform: ROIDetail[];
  conversionsLeads: ConversionsLeadsData;
  customReports: CustomReport[];
}
