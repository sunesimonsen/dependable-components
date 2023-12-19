import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { route, params, Link } from "@dependable/nano-router";
import { css, classes } from "stylewars";

const styles = css`
  & {
    color: var(--dc-text-color-0);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 4px;
    display: block;
  }

  &:hover {
    background: var(--dc-color-neutral-2);
  }

  &:active {
    background: var(--dc-color-neutral-3);
  }

  &:focus-visible {
    outline: var(--dc-focus-ring);
  }
`;

const activeStyles = css`
  & {
    background: var(--dc-color-neutral-2);
  }
`;

export class PageReference {
  isActive() {
    return route() === "page" && this.props.id === params().id;
  }

  render({ id, children, ...other }) {
    return html`
      <${Link}
        route="page"
        params=${{ id }}
        hash=""
        className=${classes(styles, this.isActive() && activeStyles)}
        ...${other}
      >
        ${children}
      <//>
    `;
  }
}
