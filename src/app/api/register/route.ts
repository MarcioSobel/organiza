import { db, User } from "@/utils/api";
import { hash } from "bcryptjs";

type RequestBody = {
  email: string;
  password: string;
  name: string;
  surname: string | null;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { email, surname, name, password } = body as RequestBody;

  const { data: users } = (await db.get("/users")) as { data: User[] };

  const userAlreadyRegistered = users.some((user) => user.email === email);
  if (userAlreadyRegistered) {
    return new Response(
      JSON.stringify({ message: "User already registered." }),
      {
        status: 409,
      },
    );
  }

  const passwordHash = await hash(password, 4);
  const response = await db.post("/users", {
    name,
    surname: surname || null,
    email,
    passwordHash,
  });

  const user = response.data as User;
  return new Response(
    JSON.stringify({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        surname: user.surname,
      },
    }),
    {
      status: 201,
    },
  );
}
