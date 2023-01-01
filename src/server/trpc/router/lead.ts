import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

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
  listLeads: protectedProcedure.query(async ({ ctx }) => {
    const leads = await ctx.prisma.lead.findMany();
    return {
      leads,
    };
  }),
});
