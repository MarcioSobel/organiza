import { hash } from "bcryptjs";
import { server, User } from "./api";

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
    ...data,
    surname: data.surname ? data.surname : null,
    password: undefined,
    passwordHash,
  });

  const user = createResponse.data;
  return user;
}
