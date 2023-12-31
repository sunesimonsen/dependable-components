import { html } from "@dependable/view";

export default class LockLockedStroke16Icon {
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
        <rect width="11" height="8" x="2.5" y="7.5" rx=".5" ry=".5" />
        <path d="M4.5 7.5V4a3.5 3.5 0 017 0v3.5" />
      </g>
    </svg> `;
  }
}
