import { html } from "@dependable/view";

export default class ExitStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M.5 2.4l2-1.9v11l-2-1.9zm2 .1H6c.3 0 .5.2.5.5v1m-4 5.5H6c.3 0 .5-.2.5-.5V8M11 6H5m4.5-2l1.6 1.6c.2.2.2.5 0 .7L9.5 8"
      />
    </svg> `;
  }
}
