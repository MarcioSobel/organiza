import axios from "axios";
import { createUser } from "./create-user";
import { authenticate } from "./authenticate";

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
