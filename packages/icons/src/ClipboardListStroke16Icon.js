import { html } from "@dependable/htm";

export default class ClipboardListStroke16Icon {
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
        stroke-linejoin="round"
        d="M4.5 2.5H2a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5h-2.5m-7 8h2v2h-2zm0-4h2v2h-2zm4.5 1h3m-3 4h3m-7.464-7c-.3-2.08 1.332-4 3.45-4s3.749 1.92 3.449 4h-6.9z"
      />
    </svg> `;
  }
}
