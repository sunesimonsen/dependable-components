import { html } from "@dependable/view";

export default class TableFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <rect
        width="11"
        height="11"
        x=".5"
        y=".5"
        fill="none"
        stroke="currentColor"
        rx=".5"
        ry=".5"
      />
      <path
        fill="currentColor"
        d="M.5.5h11V3H.5zM.5 5h11v1H.5zm0 3h11v1H.5zM3 2.5h1v9H3zm3 0h1v9H6z"
      />
    </svg> `;
  }
}
