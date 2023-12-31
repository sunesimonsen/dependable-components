import { html } from "@dependable/view";

export default class OverflowFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="currentColor">
        <circle cx="2" cy="8" r="2" />
        <circle cx="8" cy="8" r="2" />
        <circle cx="14" cy="8" r="2" />
      </g>
    </svg> `;
  }
}
