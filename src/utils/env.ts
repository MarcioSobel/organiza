import { z } from "zod";
import "dotenv/config";

const localhost = "http://localhost:3333";

const envSchema = z.object({
  MOCKAPI_URL: z.string().default(localhost),
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    "⚠︎ Invalid environment variables",
    _env.error.format(),
  );

  throw new Error("⚠︎ Invalid environment variables");
}

if (_env.data.MOCKAPI_URL === localhost) {
  console.log(
    "\x1b[34m%s\x1b[0m",
    "⟶ Make sure the json-server is also running using 'npm run api' or add a 'MOCKAPI_URL' environment variable.",
  );
}

export const env = _env.data;
