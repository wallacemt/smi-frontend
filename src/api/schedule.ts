import axios from "axios";
import { baseURL, handleToken } from "./api";
import type { PostSheduled } from "@/types/aiTypes";
import type { SchedulePostRequest } from "@/types/schedule";

const scheduleApi = axios.create({
  baseURL: `${baseURL}/schedule`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getScheduledPosts = async (): Promise<PostSheduled[]> => {
  try {
    handleToken(scheduleApi);
    const response = await scheduleApi.get<PostSheduled[]>("/");
    return response.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};


export const createSchedulePost = async (data: SchedulePostRequest): Promise<PostSheduled> => {
  try {
    handleToken(scheduleApi);
    const response = await scheduleApi.post<PostSheduled>("/", data);
    return response.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
}