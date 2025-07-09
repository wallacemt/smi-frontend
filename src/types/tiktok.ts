export interface Metric {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  bgIcon: string;
  borderColor: string;
  changeColor: string;
}

export interface Video {
  title: string;
  description: string;
  views: string;
  likes: string;
  shares: string;
  iconBg: string;
}

export interface Trend {
  name: string;
  growth: string;
}

export interface HashtagData {
  popular: string[];
  trends: Trend[];
  bestTimes: {
    time: string;
    percent: number;
  }[];
}
