import { h } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { SourceCode } from "./SourceCode.js";
import { IconButton } from "@dependable/components/IconButton/v0";
import { ExamplePreview } from "./ExamplePreview.js";
import { FatalErrorBoundary } from "./FatalErrorBoundary.js";
import { JSFiddleButton } from "./JSFiddleButton.js";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import MarkupStroke16Icon from "@dependable/icons/MarkupStroke16Icon";

const styles = css`
  & {
    border: 1px solid var(--dc-color-neutral-85);
    border-radius: 4px;
    overflow: hidden;
    margin: 2em 0;
  }
`;

const buttonsStyles = css`
  & {
    background: var(--dc-color-panel);
    border-top: 1px solid var(--dc-color-neutral-85);
    --dc-toolbar-padding: var(--dc-spacing-1);
    --dc-toolbar-gap: var(--dc-spacing-1);
  }
`;

export class Example {
  constructor() {
    this.sourceVisible = observable(false);
    this.onToggleSource = () => {
      this.sourceVisible(!this.sourceVisible());
    };
  }

  render({ children, src, noPadding }) {
    return h(
      "div",
      { className: styles },
      h(ExamplePreview, { noPadding: noPadding }, children),
      h(
        ToolbarLayout,
        { sections: "end", className: buttonsStyles },
        h(JSFiddleButton, { src: src }),
        h(
          IconButton,
          {
            basic: true,
            "aria-pressed": String(this.sourceVisible()),
            onClick: this.onToggleSource,
          },
          h(MarkupStroke16Icon),
        ),
      ),
      h(
        FatalErrorBoundary,
        { name: "source-code" },
        this.sourceVisible() && h(SourceCode, { src: src }),
      ),
    );
  }
}
