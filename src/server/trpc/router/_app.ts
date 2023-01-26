import { router } from "../trpc";
import { authRouter } from "./auth";
import { leadRouter } from "./lead";
import { mailerRouter } from "./mailer";

export const appRouter = router({
  lead: leadRouter,
  auth: authRouter,
  mailer: mailerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
