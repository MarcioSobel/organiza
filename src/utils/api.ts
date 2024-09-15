import { authenticate } from "@/app/api/authenticate";
import { createUser } from "@/app/api/create-user";
import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost:3333",
});

export type User = {
  id: string;
  name: string;
  surname: string | null;
  email: string;
  passwordHash: string;
};

const api = {
  createUser,
  authenticate,
};

export default api;
