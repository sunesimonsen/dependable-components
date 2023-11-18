import { html } from "@dependable/view";

export default class DirectionLtrFill16Icon {
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
        fill="currentColor"
        d="M6 0a4 4 0 000 8h.5V0zm6 15.5v-6a.5.5 0 01.854-.354l2.646 2.647a1 1 0 010 1.414l-2.646 2.646A.5.5 0 0112 15.5z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M14.5 12.5H.5m6-2V.5H8a.5.5 0 01.5.5v9.5"
      />
    </svg> `;
  }
}
