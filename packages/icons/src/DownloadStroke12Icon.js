import { html } from "@dependable/htm";

export default class DownloadStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M1.5 11.5h9m-8-6l3.1 3.1c.2.2.5.2.7 0l3.1-3.1M6 8.5v-8"
      />
    </svg> `;
  }
}
