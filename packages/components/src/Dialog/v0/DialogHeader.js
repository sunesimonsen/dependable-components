import { html } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    margin: 0;
    border-bottom: 1px solid var(--dc-color-neutral-2);
    padding-inline: 40px 74px;
    padding-block: 20px 20px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export class DialogHeader {
  render({ children }) {
    return html`<h2 className=${styles}>${children}</h2>`;
  }
}
