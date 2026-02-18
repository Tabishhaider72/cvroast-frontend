import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const uploadResume = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/resume/upload", formData);
  return response.data;
};
