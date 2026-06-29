function stringify(value: unknown): string {
  if (Array.isArray(value)) {
    let result = "";

    for (const item of value) {
      result += stringify(item);
    }

    return result;
  }

  return String(value);
}

export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  let result = strings[0];

  for (let i = 0; i < values.length; i++) {
    result += stringify(values[i]);
    result += strings[i + 1];
  }

  return result;
}

export const css = html;
