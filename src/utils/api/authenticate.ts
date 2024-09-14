import { compare, hash } from "bcryptjs";
import { server, User } from "./api";

type AuthenticationRequest = { email: string; password: string };
type AuthenticationResponse = {
  user: Omit<User, "passwordHash">;
  token: string;
};

export async function authenticate({
  email,
  password,
}: AuthenticationRequest): Promise<AuthenticationResponse> {
  const users = (await server.get("/users")) as User[];

  for (const user of users) {
    if (user.email !== email) continue;

    const passwordMatches = await compare(password, user.passwordHash);
    if (passwordMatches) {
      const tokenContent = { userId: user.id };
      const token = await hash(JSON.stringify(tokenContent), 4);

      return { user, token };
    }
  }

  throw new Error("E-mail or password is incorrect");
}
