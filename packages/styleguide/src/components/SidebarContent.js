import { html } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    padding: 16px 32px;
    min-width: 300px;
    background: var(--dc-color-neutral-97);
  }

  & h1 {
    font-size: 16px;
  }

  & ul {
    padding: 0;
    margin: 0;
  }

  & ul > li {
    padding: 0;
    margin: 4px;
    list-style-type: none;
  }
`;

export class SidebarContent {
  render() {
    return html`<nav className=${styles}>${this.context.navigation}</nav>`;
  }
}
