import { html } from "@dependable/view";

export default class InboxStroke12Icon {
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
        <rect width="9" height="11" x="1.5" y=".5" rx=".5" ry=".5" />
        <path
          stroke-linecap="round"
          d="M1.5 8.5h2V9a.49.49 0 00.5.5h4a.49.49 0 00.5-.5v-.5h2M4 2.5h4m-4 2h4m-4 2h4"
        />
      </g>
    </svg> `;
  }
}
