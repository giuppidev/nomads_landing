import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const leadRouter = router({
  createLead: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .mutation(async ({ input, ctx }) => {
      const lead = await ctx.prisma.lead.create({
        data: { name: input.name, email: input.email },
      });
      return {
        lead,
      };
    }),
});
