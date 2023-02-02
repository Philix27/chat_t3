import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const wardRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ward.findMany();
  }),

  create: publicProcedure
    .input(
      z.object({ name: z.string(), capital: z.string(), code: z.string() })
    )
    .mutation(({ ctx }) => {
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
