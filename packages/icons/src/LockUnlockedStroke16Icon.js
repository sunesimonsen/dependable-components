import { html } from "@dependable/view";

export default class LockUnlockedStroke16Icon {
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
        <path stroke-linecap="round" d="M4.5 7V4a3.5 3.5 0 017 0v.5" />
        <rect width="11" height="8" x="2.5" y="7.5" rx=".5" ry=".5" />
      </g>
    </svg> `;
  }
}
