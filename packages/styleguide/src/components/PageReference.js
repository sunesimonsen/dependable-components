import { h } from "@dependable/view";
import { computed } from "@dependable/state";
import { route, params, Link } from "@dependable/nano-router";
import { css, classes } from "stylewars";

const styles = css`
  & {
    color: var(--dc-color-foreground);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 4px;
    display: block;
  }

  &:hover {
    background: var(--dc-color-neutral-90);
  }

  &:active {
    background: var(--dc-color-neutral-85);
  }

  &:focus-visible {
    outline: var(--dc-focus-ring);
  }
`;

const activeStyles = css`
  & {
    background: var(--dc-color-neutral-90);
  }
`;

export class PageReference {
  isActive() {
    return route() === "page" && this.props.id === params().id;
  }

  render({ id, children, ...other }) {
    return h(
      Link,
      {
        route: "page",
        params: { id },
        hash: "",
        className: classes(styles, this.isActive() && activeStyles),
        state: { closeSidebars: true },
        ...other,
      },
      children,
    );
  }
}
