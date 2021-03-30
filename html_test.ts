import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import { css, html } from "./mod.ts";

Deno.test("html tag", (): void => {
  const name = "tom";
  const age = 1;
  assertEquals(html`<div>Hello ${name}!</div>`, "<div>Hello tom!</div>");
  assertEquals(html`${name}${age - 1}`, "tom0");
  assertEquals(html`1${name}${age + `${89}`}`, "1tom189");
  assertEquals(html`${Symbol.for("abc")}`, "Symbol(abc)");
});

Deno.test("css tag", (): void => {
  const color = "red";
  assertEquals(css`div{color:${color}}`, "div{color:red}");
});
