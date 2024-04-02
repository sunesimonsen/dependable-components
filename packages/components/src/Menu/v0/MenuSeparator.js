import { h } from "@dependable/view";
import { css, classes } from "stylewars";

const styles = css`
  & {
    display: block;
    margin: 4px 0px;
    border-bottom: 1px solid var(--dc-color-neutral-90);
  }
`;

export class MenuSeparator {
  render() {
    return h("div", { className: styles });
  }
}
