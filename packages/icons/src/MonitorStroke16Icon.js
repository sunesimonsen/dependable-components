import { html } from "@dependable/view";

export default class MonitorStroke16Icon {
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
        <rect width="15" height="10" x=".5" y=".5" rx=".5" ry=".5" />
        <path stroke-linecap="round" d="M11.5 15.5a3.54 3.54 0 00-7 0" />
      </g>
    </svg> `;
  }
}
