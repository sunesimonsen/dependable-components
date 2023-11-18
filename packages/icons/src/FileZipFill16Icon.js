import { html } from "@dependable/view";

export default class FileZipFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M10 3.5v-3c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5V3h1c.28 0 .5.22.5.5S8.28 4 8 4H7v1h1c.28 0 .5.22.5.5S8.28 6 8 6H7v1h1c.28 0 .5.22.5.5S8.28 8 8 8H7v1h1c.28 0 .5.22.5.5s-.22.5-.5.5H7v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V11H5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h1V9H5c-.28 0-.5-.22-.5-.5S4.72 8 5 8h1V7H5c-.28 0-.5-.22-.5-.5S4.72 6 5 6h1V5H5c-.28 0-.5-.22-.5-.5S4.72 4 5 4h1V3H5c-.28 0-.5-.22-.5-.5S4.72 2 5 2h1V.5c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5.5c0-.28-.22-.5-.5-.5h-3c-.83 0-1.5-.67-1.5-1.5zm1-3V3c0 .55.45 1 1 1h2.5c.45 0 .67-.54.35-.85l-3-3C11.54-.17 11 .06 11 .5z"
      />
    </svg> `;
  }
}
