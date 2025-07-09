// types.ts
export interface YouTubeMetricCard {
  title: string;
  value: string;
  subtext: string;
  borderColor: string;
  icon: React.ReactNode;
}

export interface YouTubeVideo {
  title: string;
  views: string;
  likes: string;
  comments: string;
  duration: string;
  postedAgo: string;
  gradient: string;
}

export interface TrafficSource {
  label: string;
  value: string;
}

export interface Demographic {
  ageRange: string;
  percentage: string;
}
