import { KannonCli } from "kannon.js";
import { env } from "../../env/server.mjs";

export const kannonCli = new KannonCli(
  env.KANNON_DOMAIN,
  env.KANNON_API_KEY,
  {
    email: env.KANNON_SENDER_EMAIL,
    alias: env.KANNON_SENDER_ALIAS,
  },
  {
    host: env.KANNON_HOST,
  }
);
