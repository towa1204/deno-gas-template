import { build } from "esbuild";
import { GasPlugin } from "esbuild-gas-plugin";

build({
  entryPoints: ["./entrypoint.ts"],
  outfile: "dist/main.js",
  bundle: true,
  plugins: [GasPlugin],
}).catch(() => Deno.exit(1));
