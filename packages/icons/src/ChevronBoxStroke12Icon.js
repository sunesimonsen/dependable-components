import { html } from "@dependable/view";

export default class ChevronBoxStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <rect width="11" height="9" x=".5" y="1.5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          d="M3.5 5l2.15 2.15a.5.5 0 00.71 0L8.5 5"
        />
      </g>
    </svg> `;
  }
}
