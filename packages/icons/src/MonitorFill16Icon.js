import { html } from "@dependable/view";

export default class MonitorFill16Icon {
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
        <rect width="16" height="11" rx="1" ry="1" />
        <path
          d="M11.5 16h-7l-.4-.2a.5.5 0 01-.1-.4 4 4 0 017.9 0 .5.5 0 01-.1.4z"
        />
      </g>
    </svg> `;
  }
}
