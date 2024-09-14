import { compare, hash } from "bcryptjs";
import { server, User } from "./api";
import { setCookie } from "cookies-next";

type AuthenticationRequest = { email: string; password: string };
type AuthenticationResponse = {
  user: Omit<User, "passwordHash">;
  token: string;
};

export async function authenticate({
  email,
  password,
}: AuthenticationRequest): Promise<AuthenticationResponse> {
  const response = await server.get("/users");
  const users = response.data as User[];

  for (const user of users) {
    if (user.email !== email) continue;
    console.log("Email matches");

    const passwordMatches = await compare(password, user.passwordHash);
    if (passwordMatches) {
      const tokenContent = { userId: user.id };
      const token = await hash(JSON.stringify(tokenContent), 4);
      setCookie("token", token);

      return { user, token };
    }
  }

  throw new Error("E-mail or password is incorrect");
}
