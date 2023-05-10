import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), "nexus-typegen.ts"),
    schema: join(process.cwd(), "schema.graphql"),
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"), // 1
    export: "Context", // 2
  },
});
