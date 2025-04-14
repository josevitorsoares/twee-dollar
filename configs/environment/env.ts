import { config } from "dotenv";
import { join } from "node:path";
import { z } from "zod";

const result = config({
  path: join(__dirname, "..", "..", ".env"),
});

if (result.error) {
  if (result.error.message === "ENOENT") {
    throw new Error('Missing ".env" file');
  }

  throw new Error(result.error.message);
}

const envSchema = z.object({
  API_PORT: z.coerce.number().default(3333),
  TWITTER_APP_KEY: z.string(),
  TWITTER_APP_SECRET: z.string(),
  TWITTER_ACCESS_TOKEN: z.string(),
  TWITTER_ACCESS_SECRET: z.string(),
});

const env = envSchema.parse(process.env, {
  errorMap: () => ({
    message: "Environment variable not found",
  }),
});

const {
  API_PORT,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
} = env;

export {
  API_PORT,
  TWITTER_ACCESS_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
};
