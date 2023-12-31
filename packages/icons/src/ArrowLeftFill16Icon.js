import { html } from "@dependable/view";

export default class ArrowLeftFill16Icon {
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
        d="M1 8.5h14.5"
      />
      <path
        fill="currentColor"
        d="M5.15 13.65L.71 9.21a.996.996 0 010-1.41l4.44-4.44c.31-.32.85-.1.85.35v9.59a.5.5 0 01-.85.35z"
      />
    </svg> `;
  }
}
