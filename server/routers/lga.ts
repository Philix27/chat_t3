import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const lgaRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.lga.findMany();
  }),

  create: publicProcedure.mutation(({ ctx }) => {
    return ctx.prisma.state.create({
      data: {
        name: "string",
        capital: "string",
        code: "string",
      },
    });
  }),

  // hello: publicProcedure.
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),
});
