import { html } from "@dependable/view";
import { expect, render } from "../../../test/index.js";
import sinon from "sinon";
import { Button } from "./index.js";

describe("Button", () => {
  it("renders a button with the given attributes", () => {
    const element = render(html`<${Button} title="My button">My button<//>`);

    expect(
      element,
      "to satisfy",
      `<button title="My button"><!--hidden--><span>My button</span></button>`,
    );
  });

  it("respond to clicks", () => {
    const clickSpy = sinon.spy().named("onClick");
    const element = render(html`<${Button} onClick=${clickSpy}>My button<//>`);

    element.dispatchEvent(new CustomEvent("click"));

    expect(clickSpy, "was called once");
  });

  describe("when disabled", () => {
    it("is has a disabled attribute", () => {
      const element = render(html`<${Button} disabled>My button<//>`);

      expect(element, "to match", "[disabled]");
    });
  });

  describe("when loading", () => {
    it("renders a button with a loading overlay", () => {
      const element = render(html`<${Button} loading>My button<//>`);

      expect(element, "to contain elements matching", "[role=progressbar]");
    });

    it("doesn't respond to clicks", () => {
      const clickSpy = sinon.spy().named("onClick");
      const element = render(
        html`<${Button} onClick=${clickSpy} loading>My button<//>`,
      );

      element.dispatchEvent(new CustomEvent("click"));

      expect(clickSpy, "was not called");
    });
  });
});
