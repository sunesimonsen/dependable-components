import { html } from "@dependable/view";

export default class ShapesFill16Icon {
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
        d="M6 9a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1v-5a1 1 0 011-1h5zm6.25-.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zM8.857.486l3 5A1 1 0 0111 7H5a1 1 0 01-.857-1.514l3-5a1 1 0 011.714 0z"
      />
    </svg> `;
  }
}
