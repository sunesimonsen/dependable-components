import { html } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 40px 32px;
    gap: 20px;
  }
`;

export class DialogFooter {
  render({ children }) {
    return html`<div className=${styles}>${children}</div>`;
  }
}
