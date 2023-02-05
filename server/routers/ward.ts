import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const wardRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ward.findMany();
  }),

  getByStateId: publicProcedure
    .input(
      z.object({
        lgaId: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.lga.findMany({
        where: {
          stateId: input.lgaId,
        },
      });
    }),
});
