import axios from "axios";
import { env } from "./env";

export const db = axios.create({
  baseURL: env.MOCKAPI_URL,
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
