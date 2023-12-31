import { html } from "@dependable/view";

export default class ChevronBoxStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <rect width="15" height="13" x=".5" y="1.5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          d="M4 6.5l3.65 3.65a.5.5 0 00.71 0L12 6.5"
        />
      </g>
    </svg> `;
  }
}
