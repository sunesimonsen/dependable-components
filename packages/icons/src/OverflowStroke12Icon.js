import { html } from "@dependable/view";

export default class OverflowStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="currentColor">
        <circle cx="2" cy="6" r="1" />
        <circle cx="10" cy="6" r="1" />
        <circle cx="6" cy="6" r="1" />
      </g>
    </svg> `;
  }
}
