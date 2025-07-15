import axios from "axios";
import { baseURL, handleToken } from "./api";
import type { UserResponse } from "@/types/company";

const companyApi = axios.create({
  baseURL: `${baseURL}/company/:id`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = async (): Promise<UserResponse> => {
  try {
    handleToken(companyApi);
    const userResponse = await companyApi.get<UserResponse>("/admin");
    return userResponse.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};
