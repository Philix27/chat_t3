import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const lgaRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lga.findMany();
  }),

  getByStateId: publicProcedure
    .input(
      z.object({
        stateId: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.lga.findMany({
        where: {
          stateId: input.stateId,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        roomId: z.string(),
        stateId: z.string(),
        code: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.lga.create({
        data: {
          name: input.name.toUpperCase(),
          roomId: input.name,
          stateId: input.name,
          code: input.name.toUpperCase(),
        },
      });
    }),
});
