import { html } from "@dependable/view";

export default class AlertErrorStroke12Icon {
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
        <circle cx="5.5" cy="6.5" r="5" />
        <path stroke-linecap="round" d="M5.5 3.5v3" />
      </g>
      <circle cx="5.5" cy="9" r="1" fill="currentColor" />
    </svg> `;
  }
}
