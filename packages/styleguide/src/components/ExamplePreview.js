import { h } from "@dependable/view";
import { css } from "stylewars";
import { dir } from "./RTLSwitch.js";
import { Center } from "@dependable/components/Center/v0";
import { FatalErrorBoundary } from "./FatalErrorBoundary.js";

const paddingStyles = css`
  & {
    padding: 40px;
  }
`;

const exampleFailed = h(Center, {}, h("p", {}, "Example failed :-/"));

export class ExamplePreview {
  render({ children, noPadding }) {
    return h(
      "div",
      { dir: dir(), className: !noPadding && paddingStyles },
      h(
        FatalErrorBoundary,
        { name: "ExamplePreview", fallback: exampleFailed },
        children,
      ),
    );
  }
}
