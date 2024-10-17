import { h } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    padding: 16px 32px;
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
  constructor() {
    this.onClick = () => {
      this.context.visibleSidebar("");
    };
  }

  render() {
    return h(
      "nav",
      { onClick: this.onClick, className: styles },
      this.context.navigation,
    );
  }
}
