import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const lgaRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lga.findMany();
  }),
  getByStateId: publicProcedure
    .input(
      z.object({
        stateId: z.number(),
      })
    )
    .query(({ input, ctx }) => {
      return ctx.prisma.lga.findMany({
        where: {
          stateId: input.stateId,
        },
      });
    }),
  // create: publicProcedure
  //   .input(
  //     z.object({
  //       name: z.string(),
  //       roomId: z.string(),
  //       stateId: z.number(),
  //       code: z.string(),
  //     })
  //   )
  //   .mutation(async ({ input, ctx }) => {
  //     const stateOfLga = await ctx.prisma.state.findFirst({
  //       where: { id: input.stateId },
  //     });
  //     return ctx.prisma.lga.create({
  //       data: {
  //         name: input.name.toUpperCase(),
  //         roomId: input.roomId,
  //         stateId: stateOfLga?.id,
  //         code: input.code.toUpperCase(),
  //       },
  //     });
  //   }),
});
