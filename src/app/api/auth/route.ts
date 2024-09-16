import { db, User } from "@/utils/api";
import { compare, hash } from "bcryptjs";
import cookie from "cookie";

type RequestBody = {
  email: string;
  password: string;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body as RequestBody;

  const { data: users } = (await db.get("/users")) as {
    data: Array<User & { passwordHash: string }>;
  };

  const errorResponse = new Response(
    JSON.stringify({ message: "Invalid credentials" }),
    {
      status: 400,
    },
  );

  for (const user of users) {
    if (user.email !== email) continue;

    const passwordMatches = await compare(password, user.passwordHash);
    if (!passwordMatches) return errorResponse;

    const token = await hash(JSON.stringify({ id: user.id }), 4);
    const tokenCookie = cookie.serialize("token", token, {
      sameSite: "strict",
      path: "/",
    });

    return new Response(
      JSON.stringify({
        user: {
          id: user.id,
          name: user.name,
          surname: user.surname,
          email: user.email,
        },
      }),
      {
        status: 200,
        headers: { "Set-Cookie": tokenCookie },
      },
    );
  }

  return errorResponse;
}
