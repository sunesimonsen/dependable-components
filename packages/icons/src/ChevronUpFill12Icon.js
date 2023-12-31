import { html } from "@dependable/view";

export default class ChevronUpFill12Icon {
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
        fill="currentColor"
        d="M10.707 8.707a1 1 0 01-1.32.083l-.094-.083L6 5.415 2.707 8.707a1 1 0 01-1.32.083l-.094-.083a1 1 0 01-.083-1.32l.083-.094 4-4a1 1 0 011.32-.083l.094.083 4 4a1 1 0 010 1.414z"
      />
    </svg> `;
  }
}
