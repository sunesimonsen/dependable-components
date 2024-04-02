import { html } from "@dependable/htm";

export default class CheckBoxDoubleStroke16Icon {
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
        <rect width="11" height="11" x="1.5" y="1.5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.5 6.5L6 9l4.5-4.5m-6 10H14a.5.5 0 00.5-.5V4.5"
        />
      </g>
    </svg> `;
  }
}
