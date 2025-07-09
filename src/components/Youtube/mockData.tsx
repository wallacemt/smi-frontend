import type { Demographic, TrafficSource, YouTubeMetricCard, YouTubeVideo } from '@/types/youtube';
import { FaUsers, FaPlay, FaClock, FaDollarSign,  } from 'react-icons/fa';


export const youtubeCards: YouTubeMetricCard[] = [
  {
    title: 'Inscritos',
    value: '10.8K',
    subtext: '+156 esta semana',
    borderColor: 'border-red-500',
    icon: <FaUsers className="text-red-400 text-xl" />
  },
  {
    title: 'Visualizações',
    value: '245K',
    subtext: 'Este mês',
    borderColor: 'border-blue-500',
    icon: <FaPlay className="text-blue-400 text-xl" />
  },
  {
    title: 'Tempo de Exibição',
    value: '1.2K',
    subtext: 'Horas',
    borderColor: 'border-green-500',
    icon: <FaClock className="text-green-400 text-xl" />
  },
  {
    title: 'Receita Estimada',
    value: 'R$ 890',
    subtext: 'Este mês',
    borderColor: 'border-purple-500',
    icon: <FaDollarSign className="text-purple-400 text-xl" />
  }
];

export const popularVideos: YouTubeVideo[] = [
  {
    title: 'Guia Completo: Baixio em 3 Dias',
    views: '45.2K',
    likes: '1.8K',
    comments: '234',
    duration: '12:45',
    postedAgo: '2 dias atrás',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    title: 'Top 10 Restaurantes Locais',
    views: '32.1K',
    likes: '1.2K',
    comments: '189',
    duration: '8:32',
    postedAgo: '5 dias atrás',
    gradient: 'from-blue-500 to-teal-600'
  },
  {
    title: 'Aventuras na Natureza',
    views: '28.7K',
    likes: '956',
    comments: '145',
    duration: '15:20',
    postedAgo: '1 semana atrás',
    gradient: 'from-green-500 to-blue-600'
  }
];

export const trafficSources: TrafficSource[] = [
  { label: 'Pesquisa do YouTube', value: '45.2%' },
  { label: 'Vídeos sugeridos', value: '32.8%' },
  { label: 'Tráfego externo', value: '12.5%' },
  { label: 'Direto', value: '9.5%' }
];

export const demographics: Demographic[] = [
  { ageRange: '18-24 anos', percentage: '28%' },
  { ageRange: '25-34 anos', percentage: '35%' },
  { ageRange: '35-44 anos', percentage: '22%' },
  { ageRange: '45+ anos', percentage: '15%' }
];
