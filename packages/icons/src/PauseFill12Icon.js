import { html } from "@dependable/view";

export default class PauseFill12Icon {
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
        <rect width="3" height="10" x="2" y="1" rx="1" ry="1" />
        <rect width="3" height="10" x="7" y="1" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
