import { server, User } from "@/utils/api";
import { hash } from "bcryptjs";

export async function createUser(
  data: Omit<User, "passwordHash" | "id"> & { password: string },
): Promise<User> {
  const getResponse = await server.get("/users");
  const users = getResponse.data as User[];

  const userAlreadyRegistered = users.some((user) => user.email === data.email);
  if (userAlreadyRegistered) {
    throw new Error("User already registered.");
  }

  const passwordHash = await hash(data.password, 4);
  const createResponse = await server.post("/users", {
    name: data.name,
    surname: data.surname || null,
    email: data.email,
    passwordHash,
  });

  const user = createResponse.data;
  return user;
}
