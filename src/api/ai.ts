import axios from "axios";
import { baseURL, handleToken, type SimpleResponse } from "./api";
import type { Persona, PostsByPersonas } from "@/types/aiTypes";

const aiApi = axios.create({
  baseURL: `${baseURL}/ai`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPersonas = async (): Promise<Persona[]> => {
  try {
    handleToken(aiApi);
    const response = await aiApi.get<Persona[]>("/personas");
    return response.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

export const postPersonasGenerate = async (): Promise<Persona[]> => {
  try {
    handleToken(aiApi);
    const response = await aiApi.post<Persona[]>("/generate-personas");
    return response.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

export const getPersonaById = async (id: string): Promise<Persona> => {
  try {
    handleToken(aiApi);
    const response = await aiApi.get<Persona>(`/personas/${id}`);
    return response.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

export const getGeneratedPosts = async (): Promise<PostsByPersonas[]> => {
  try {
    handleToken(aiApi);
    const response = await aiApi.get<PostsByPersonas[]>("/posts");
    return response.data;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

export const getGeneratedPostsByPersonaId = async (id: string): Promise<PostsByPersonas[]> => {
  try {
    handleToken(aiApi);
    const res = await aiApi.get<PostsByPersonas[]>(`/posts/persona/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const postGeneratePostByPersona = async (personaId: string, prompt?: string): Promise<PostsByPersonas> => {
  try {
    handleToken(aiApi);
    const res = await aiApi.post<PostsByPersonas>(`/persona/${personaId}/generate-post`, { prompt });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePersonaById = async (personaId: string): Promise<SimpleResponse> => {
  try {
    handleToken(aiApi);
    const res = await aiApi.delete<SimpleResponse>(`/personas/${personaId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
