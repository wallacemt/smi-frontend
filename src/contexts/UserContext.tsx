import { createContext, useState, useEffect, type ReactNode, useContext } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

import { getUser } from "@/api/company";
import type { UserResponse } from "@/types/company";

export const UserContext = createContext({
  user: null as UserResponse | null,
  login: (_token: string) => {},
  logout: () => {},
  loading: true,
  update: false,
  handleUpdate: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  const init = async () => {
    const token = Cookies.get("jwtToken");
    if (token) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, [update]);

  const fetchUserData = async () => {
    try {
      const userData = await getUser();
      setUser(userData ?? null);
    } catch (error: any) {
      if (error.response.status === 401) {
        logout();
      }
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  const login = async (token: string) => {
    Cookies.set("jwtToken", token, { expires: 1, sameSite: "strict" });
    fetchUserData();
    navigate("/");
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    setUser(null);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleUpdate = () => setUpdate(!update);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        update,
        handleUpdate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
