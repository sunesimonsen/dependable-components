import { html } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
  }
`;

const overflowStyles = (overflow) => css`
  & {
    overflow: ${overflow};
  }
`;

// The padding makes sure that children margins doesn't push the container in.
const popupContainerStyles = css`
  & {
    position: relative;
    padding: 0.01px 0;
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
