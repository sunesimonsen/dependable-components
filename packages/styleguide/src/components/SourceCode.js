/* global Prism */
import { h } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { Spinner } from "@dependable/components/Spinner/v0";
import { Cache, LOADED } from "@dependable/cache";

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

const sourceCodeCache = new Cache();

export class SourceCode {
  constructor() {
    this.highlightCode = (ref) => {
      Prism.highlightAllUnder(ref);
    };

    this.status = observable("uninitialised");
  }

  render({ src }) {
    sourceCodeCache.initialize(src, async () => {
      const response = await fetch(src);
      return await response.text();
    });

    const [content, status, error] = sourceCodeCache.byId(src);

    if (error) throw error;

    if (status !== LOADED) {
      return h(Center, { className: loadingStyles }, h(Spinner));
    }

    return h(
      "pre",
      { className: preStyles, ref: this.highlightCode },
      h("code", { className: "language-js" }, content),
    );
  }
}
