import { html } from "@dependable/htm";

export default class ShareStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M10.5 6.5H14c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h3.5m3 4V1m-3 2.5L7.1.9c.2-.2.5-.2.7 0l2.6 2.6"
      />
    </svg> `;
  }
}
