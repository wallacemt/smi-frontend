import type { PlatformGrowthItem } from "@/types/reports";

interface PlatformGrowthListProps {
  data: PlatformGrowthItem[];
}
export const PlatformGrowthList = ({ data }: PlatformGrowthListProps) => {
  const iconClasses = {
    instagram: "fab fa-instagram text-pink-500",
    facebook: "fab fa-facebook text-blue-600",
    tiktok: "fab fa-tiktok text-white",
    youtube: "fab fa-youtube text-red-500",
  };

  return (
    <div className="space-y-4">
      {data.map(({ name, icon, followers, growth }) => (
        <div key={name} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <i className={`${iconClasses[icon]} text-xl mr-3`}></i>
            <div>
              <div className="text-white font-medium">{name}</div>
              <div className="text-gray-400 text-sm">{followers}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-green-400 font-medium">{growth}</div>
            <div className="text-gray-400 text-sm">Este mês</div>
          </div>
        </div>
      ))}
    </div>
  );
};
