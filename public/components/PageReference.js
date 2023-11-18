import { html } from "@dependable/view";
import { computed } from "@dependable/state";
import { css, classes } from "stylewars";
import { route, params, Link } from "@depedable/nano-router";

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

const isActive = (id) =>
  computed(() => route() === "page" && id === params().id);

export class PageReference {
  render({ id, children, ...other }) {
    return html`
      <${Link}
        route="page"
        params=${{ id }}
        hash=""
        className=${classes(styles, isActive() && activeStyles)}
        ...${other}
      >
        ${children}
      <//>
    `;
  }
}
