import { z } from "zod";
import { kannonCli } from "../../services/kannon";

import { router, publicProcedure } from "../trpc";

export const mailerRouter = router({
  sendWelcomeMail: publicProcedure
    .input(z.object({ firstName: z.string(), email: z.string().email() }))
    .mutation(async ({ input, ctx }) => {
      const res = await kannonCli.sendMailTemplate(
        [
          {
            email: input.email,
            fields: {
              first_name: input.firstName,
            },
          },
        ],
        "Benvenuto!",
        "template_clckfgzym000h01b0nfn2r63a@k.giuppi.dev"
      );
      console.log(res);
    }),
});
