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
  TWITTER_APP_KEY: z.string(),
  TWITTER_APP_SECRET: z.string(),
  TWITTER_ACCESS_TOKEN: z.string(),
  TWITTER_ACCESS_SECRET: z.string(),
  EXTERNAL_API: z.string(),
  IMAGE_DOLLAR_PATH: z.string().default("./assets/images/dollar.jpg"),
});

const env = envSchema.parse(process.env, {
  errorMap: () => ({
    message: "Environment variable not found",
  }),
});

const {
  EXTERNAL_API,
  IMAGE_DOLLAR_PATH,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_SECRET,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
} = env;

export {
  EXTERNAL_API,
  IMAGE_DOLLAR_PATH,
  TWITTER_ACCESS_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
};
