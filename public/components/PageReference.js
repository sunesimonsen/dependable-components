import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { route, params, Link } from "@dependable/nano-router";
import { css, classes } from "stylewars";

const styles = css`
  & {
    color: rgb(3, 54, 61);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 4px;
    display: block;
  }

  &:hover {
    background: rgba(47, 57, 65, 0.05);
  }

  &:active {
    background: rgba(47, 57, 65, 0.1);
  }
`;

const activeStyles = css`
  & {
    background: rgba(47, 57, 65, 0.1);
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
