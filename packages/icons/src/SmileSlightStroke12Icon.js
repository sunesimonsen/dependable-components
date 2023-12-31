import { html } from "@dependable/view";

export default class SmileSlightStroke12Icon {
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
        <circle cx="6" cy="6" r="5.5" />
        <path stroke-linecap="round" d="M4.13 7.88a4.94 4.94 0 003.74 0" />
      </g>
      <g fill="currentColor">
        <circle cx="4" cy="5" r="1" />
        <circle cx="8" cy="5" r="1" />
      </g>
    </svg> `;
  }
}
