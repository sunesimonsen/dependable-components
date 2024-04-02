import { html } from "@dependable/htm";

export default class XCircleFill12Icon {
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
        fill="currentColor"
        d="M5.5 1C2.46 1 0 3.46 0 6.5S2.46 12 5.5 12 11 9.54 11 6.5 8.54 1 5.5 1zm2.44 7.06c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L5.5 7.38 3.94 8.94c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88L4.62 6.5 3.06 4.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L5.5 5.62l1.56-1.56c.24-.24.64-.24.88 0s.24.64 0 .88L6.38 6.5l1.56 1.56z"
      />
    </svg> `;
  }
}
