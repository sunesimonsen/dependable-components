import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { SourceCode } from "./SourceCode.js";
import { IconButton } from "@dependable/components/IconButton/v0";
import { ExamplePreview } from "./ExamplePreview.js";
import { ErrorBoundary } from "./ErrorBoundary.js";
import { JSFiddleButton } from "./JSFiddleButton.js";

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
    display: flex;
    gap: 2px;
    justify-content: flex-end;
    align-items: center;
    background: var(--dc-color-neutral-97);
    border-top: 1px solid var(--dc-color-neutral-85);
    padding: 4px 8px;
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
    return html`
      <div className=${styles}>
        <${ExamplePreview} noPadding=${noPadding}>${children}<//>
        <div className=${buttonsStyles}>
          <${JSFiddleButton} src=${src} />
          <${IconButton}
            basic
            aria-pressed=${String(this.sourceVisible())}
            onClick=${this.onToggleSource}
          >
            <${MarkupStroke16Icon} />
          <//>
        </div>
        <${ErrorBoundary} name="source-code">
          ${this.sourceVisible() && html`<${SourceCode} src=${src} />`}
        <//>
      </div>
    `;
  }
}
