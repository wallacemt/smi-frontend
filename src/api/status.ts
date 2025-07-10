import type { StatusReponse } from "@/types/apiStatus";
import { API } from "./api";

export const getApiStatus = async (): Promise<StatusReponse> => {
  try {
    const res = await API.get<StatusReponse>("/status");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
