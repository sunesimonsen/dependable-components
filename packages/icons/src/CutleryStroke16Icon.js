import { html } from "@dependable/view";

export default class CutleryStroke16Icon {
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
        stroke-linejoin="round"
        d="M6.5.5v7a2 2 0 11-4 0v-7 4h4v-4zm-2 4v-4 4zm0 11v-6 6zm9-15v15h-1v-5h1-4v-6a4 4 0 014-4z"
      />
    </svg> `;
  }
}
