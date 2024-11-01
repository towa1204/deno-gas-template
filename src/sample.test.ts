import { greet } from "./sample.ts";
import { assertEquals } from "@std/assert";

Deno.test("greet", () => {
  assertEquals(greet("Taro"), "Hello! Taro");
});
