import { useEffect, useState } from "react";
import { Bell, ChevronDown, Search, User, Settings, LogOut, BarChart, Home, Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaRobot, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [path, setPath] = useState<string>();

  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const toggleUserMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { title: "Dashboard", icon: <Home size={20} className="mr-2" />, path: "/" },
    { title: "Analisador IA", icon: <FaRobot size={20} className="mr-2" />, path: "/ai-analyzer" },
    { title: "Instagram", icon: <FaInstagram size={20} className="mr-2" />, path: "/instagram" },
    { title: "Facebook", icon: <FaFacebook size={20} className="mr-2" />, path: "/facebook" },
    { title: "TikTok", icon: <FaTiktok size={20} className="mr-2" />, path: "/tiktok" },
    { title: "YouTube", icon: <FaYoutube size={20} className="mr-2" />, path: "/youtube" },
    { title: "Relatórios", icon: <BarChart size={20} className="mr-2" />, path: "/relatorios" },
  ];

  return (
    <>
      <header className="bg-black text-white shadow-lg border-b border-blue-500  font-principal">
        <div className="flex items-center justify-between px-4 py-3 md:px-24">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./logo.png" alt="Logo" className="w-10 h-10  animate-pulse" />
            <h1 className="text-xl font-bold">Baixio Turismo <span className="font-bold text-xs absolute text-red-600">AI</span></h1>
          
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar perfis..."
                className="pl-10 pr-4 py-2 text-gray-700 bg-white border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-full hover:bg-gray-800">
              <Bell className="text-blue-400" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                12
              </span>
            </button>

            {/* Divider */}
            <div className="border-l border-gray-600 h-8 mx-2"></div>

            {/* User Dropdown */}
            <div className="flex items-center relative">
              <button onClick={toggleUserMenu} className="flex items-center focus:outline-none">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mr-2">
                  <span className="font-medium">BT</span>
                </div>
                <span className="font-medium mr-1">AI Manager</span>
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 text-gray-200 z-50">
                  <a href="#" className="px-4 py-2 text-sm hover:bg-gray-700 flex">
                    <User className="mr-2" size={16} /> Meu Perfil
                  </a>
                  <a href="#" className="px-4 py-2 text-sm hover:bg-gray-700 flex">
                    <Settings className="mr-2" size={16} /> Configurações
                  </a>
                  <div className="border-t border-gray-700 my-1"></div>
                  <a href="#" className="px-4 py-2 text-sm hover:bg-gray-700 flex">
                    <LogOut className="mr-2" size={16} /> Sair
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 shadow-md border-b border-gray-700">
        <div className="container mx-auto px-4">
          {/* Mobile menu (dropdown) */}
          {isMobileMenuOpen && (
            <div className="flex flex-col md:hidden py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${
                    path === item.path ? "bg-blue-900 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                  } px-4 py-2 rounded flex items-center transition-colors duration-150`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${
                  path === item.path ? "border-b-2 border-purple-500 text-white" : "text-gray-400"
                } px-4 py-3 hover:text-purple-400 hover:border-b-2 border-purple-500 font-medium flex items-center`}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
