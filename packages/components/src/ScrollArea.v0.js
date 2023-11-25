import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    overscroll-behavior: contain;
    scrollbar-gutter: stable both-edges;
  }
`;

const overflowStyles = (overflow) => css`
  & {
    overflow: ${overflow};
  }
`;

const popupContainerStyles = css`
  & {
    position: relative;
  }
`;

export class ScrollArea {
  render({ overflow = "hidden auto", className, children, ...other }) {
    return html`
      <div
        className=${classes(styles, overflowStyles(overflow), className)}
        ...${other}
      >
        <div className=${popupContainerStyles}>${children}</div>
      </div>
    `;
  }
}
