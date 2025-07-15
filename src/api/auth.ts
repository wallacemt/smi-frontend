import { API } from "./api";

export const authLogin = async (email: string, password: string): Promise<{ message: string; token: string }> => {
  try {
    const response = await API.post<{ message: string; token: string }>("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
