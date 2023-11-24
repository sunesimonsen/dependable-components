import { html } from "@dependable/view";

export default class FileErrorStroke12Icon {
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
        d="M10.5 3.21V11c0 .28-.22.5-.5.5H2c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5h5.79c.13 0 .26.05.35.15l2.21 2.21c.1.09.15.21.15.35zM7.5.5V3c0 .28.22.5.5.5h2.5M4 9.5l4-4m0 4l-4-4"
      />
    </svg> `;
  }
}