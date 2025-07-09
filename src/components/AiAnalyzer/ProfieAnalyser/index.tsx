import { FaSearch } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

export const ProfileAnalyser = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram size={24} color="#E1306C" />,
      id: "instagramProfile",
      placeholder: "@username (ex: @baixioturismo)",
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={24} color="#1877F2" />,
      id: "facebookProfile",
      placeholder: "Nome da página (ex: BaixioTurismo)",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={24} color="#FE2C55" />,
      id: "tiktokProfile",
      placeholder: "@username (ex: @baixioturismo)",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={24} color="#FF0000" />,
      id: "youtubeProfile",
      placeholder: "Nome do canal (ex: BaixioTurismo)",
    },
  ];

  const analyzeProfile = (_platform: string) => {};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {platforms.map(({ name, icon, id, placeholder }) => (
        <div key={id} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700 flex gap-2 items-center">
            {icon}
            <h3 className="text-lg font-bold text-white flex items-center">{name}</h3>
          </div>
          <div className="p-4">
            <input
              type="text"
              id={id}
              className="bg-[#363F4B] bg-opacity-10 w-full border border-gray-600 rounded-md py-2 px-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
              placeholder={placeholder}
            />
            <button onClick={() => analyzeProfile(name)} className="analyze-btn flex justify-center items-center mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-in-out rounded-lg px-4 py-2 text-white font-semibold w-full">
              <FaSearch className="mr-2" />
              Analisar {name}
            </button>
            <div id={`${id}Analysis`} className="mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
