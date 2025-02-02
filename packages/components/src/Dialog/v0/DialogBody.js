import { h } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    display: block;
    margin: 0px;
    padding: 20px 40px;
    max-height: 80vh;
    overflow: auto;
    font-size: 14px;
  }

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export class DialogBody {
  render({ children }) {
    return h("div", { className: styles }, children);
  }
}
