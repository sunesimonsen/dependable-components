import { html } from "@dependable/view";

export default class EditRedoStroke12Icon {
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
        d="M.5 8.2C.5 5 3.1 2.4 6.3 2.4 9 2.5 9.9 3.8 11 5m-2.5.5H11c.3 0 .5-.2.5-.5V2.5"
      />
    </svg> `;
  }
}
