import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { stateRouter } from "./routers/state";
import { lgaRouter } from "./routers/lga";
import { wardRouter } from "./routers/ward";
import { pollingUnitRouter } from "./routers/pollingUnit";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  state: stateRouter,
  lga: lgaRouter,
  ward: wardRouter,
  pollingUnit: pollingUnitRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
