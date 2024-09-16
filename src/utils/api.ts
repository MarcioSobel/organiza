import axios from "axios";

export const db = axios.create({
  baseURL: "http://localhost:3333",
});

const api = axios.create({
  baseURL: "/api",
});
export default api;

export type User = {
  id: string;
  name: string;
  surname: string | null;
  email: string;
};
