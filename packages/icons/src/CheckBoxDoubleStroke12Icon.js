import { html } from "@dependable/view";

export default class CheckBoxDoubleStroke12Icon {
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
        <rect width="9" height="9" x=".5" y=".5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.5 5.5L4 7l3.5-3.5m-5 8H11a.5.5 0 00.5-.5V2.5"
        />
      </g>
    </svg> `;
  }
}
