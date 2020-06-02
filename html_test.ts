import { assertEquals } from "https://deno.land/std@v0.54.0/testing/asserts.ts";

import { html } from "./mod.ts";

Deno.test("html tag", (): void => {
  let name = "tom";
  let age = 1;
  assertEquals(html`<div>Hello ${name}!</div>`, "<div>Hello tom!</div>");
  assertEquals(html`${name}${age - 1}`, "tom0");
  assertEquals(html`1${name}${age + `${89}`}`, "1tom189");
  assertEquals(html`${Symbol.for("abc")}`, "Symbol(abc)");
});
