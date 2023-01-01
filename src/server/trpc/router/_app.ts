import { router } from "../trpc";
import { authRouter } from "./auth";
import { leadRouter } from "./lead";

export const appRouter = router({
  lead: leadRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
