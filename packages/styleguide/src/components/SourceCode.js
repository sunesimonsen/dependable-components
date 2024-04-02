/* global Prism */
import { h } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { Spinner } from "@dependable/components/Spinner/v0";

const preStyles = css`
  & {
    background: #272822;
    margin: 0 !important;
    border-radius: 0 !important;
  }
`;

const loadingStyles = css`
  & {
    --dc-spinner-background: rgba(255, 255, 255, 0.2);
    background: #23241f;
    height: 200px;
    color: var(--dc-color-background);
    font-size: 10px;
  }
`;

export class SourceCode {
  constructor() {
    this.highlightCode = (ref) => {
      Prism.highlightAllUnder(ref);
    };

    this.status = observable("uninitialised");
  }

  loadComponent() {
    const src = this.props.src;

    this.status("loading");

    return fetch(src)
      .then(async (response) => {
        this.content = await response.text();
        this.status("ready");
      })
      .catch((e) => {
        console.error(e);
        this.status("failed");
      });
  }

  didMount() {
    this.loadComponent();
  }

  render({ src }) {
    if (this.status() === "failed") {
      throw new Error(`Component ${src} could not be loaded`);
    }

    if (this.status() !== "ready") {
      return h(Center, { className: loadingStyles }, h(Spinner));
    }

    return h(
      "pre",
      { className: preStyles, ref: this.highlightCode },
      h("code", { className: "language-js" }, this.content),
    );
  }
}
