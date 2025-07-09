import { FaComment, FaHeart, FaShare } from "react-icons/fa";

interface TopPostCardProps {
  title: string;
  icon: React.ReactNode;
  bgGradient: string;
  likes: string;
  comments: number;
  shares: number;
}
const TopPostCard = ({ title, icon, bgGradient, likes, comments, shares }: TopPostCardProps) => (
  <div className="bg-gray-700 rounded-lg p-4">
    <div className={`aspect-square bg-gradient-to-br ${bgGradient} rounded-lg mb-3 flex items-center justify-center`}>
      {icon}
    </div>
    <p className="text-white text-sm mb-2">{title}</p>
    <div className="flex justify-between text-xs text-gray-400">
      <span className="flex">
        <FaHeart className="mr-1" />
        {likes}
      </span>
      <span className="flex">
        <FaComment className="mr-1" />
        {comments}
      </span>
      <span className="flex">
        <FaShare className="mr-1" />
        {shares}
      </span>
    </div>
  </div>
);

export default TopPostCard;
