import { assertEquals } from "jsr:@std/assert@1.0.13";

import { css, html } from "./mod.ts";

Deno.test("html tag", (): void => {
  const name = "tom";
  const age = 1;
  assertEquals(html`<div>Hello ${name}!</div>`, "<div>Hello tom!</div>");
  assertEquals(html`${name}${age - 1}`, "tom0");
  assertEquals(html`1${name}${age + `${89}`}`, "1tom189");
  assertEquals(html`${Symbol.for("abc")}`, "Symbol(abc)");
  assertEquals(
    html`<ul>${
      ["Rust", "JavaScript", "TypeScript"].map((x) => `<li>${x}</li>`)
    }</ul>`,
    "<ul><li>Rust</li><li>JavaScript</li><li>TypeScript</li></ul>",
  );
});

Deno.test("css tag", (): void => {
  const color = "red";
  const cssTag = css;
  assertEquals(cssTag`div{color:${color}}`, "div{color:red}");
});
