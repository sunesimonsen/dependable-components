import { html } from "@dependable/view";
import { expect, render } from "../../../test/index.js";
import { Anchor } from "./index.js";

describe("Anchor", () => {
  it("renders an anchor with the given attributes", () => {
    const element = render(
      html`<${Anchor} href="https://example.com" target="_blank">Example<//>`,
    );

    expect(
      element,
      "to satisfy",
      `<a href="https://example.com" target="_blank">Example</a>`,
    );
  });
});
