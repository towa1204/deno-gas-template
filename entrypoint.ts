import { main } from "./src/sample.ts";

// deno-lint-ignore no-explicit-any
declare let global: any;

global.main = main;
