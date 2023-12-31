import { html } from "@dependable/view";

export default class RecordStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <circle cx="8" cy="8" r="5" fill="currentColor" />
    </svg> `;
  }
}
