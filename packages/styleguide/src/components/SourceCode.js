/* global Prism */
import { h } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { Spinner } from "@dependable/components/Spinner/v0";
import { Suspense, lazy } from "@dependable/components/Suspense/v0";

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

  render({ src }) {
    const Content = lazy(async () => {
      const response = await fetch(src);
      const content = await response.text();

      return class Content {
        render() {
          return content;
        }
      };
    });

    const loadingScreen = h(
      Center,
      { stretched: true, className: loadingStyles },
      h(Spinner),
    );

    return h(
      Suspense,
      { fallback: loadingScreen },
      h(
        "pre",
        { className: preStyles, ref: this.highlightCode },
        h("code", { className: "language-js" }, h(Content)),
      ),
    );
  }
}
