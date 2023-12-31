import { html } from "@dependable/view";

export default class ChevronRightFill12Icon {
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
        d="M3.293 10.707a1 1 0 01-.083-1.32l.083-.094L6.585 6 3.293 2.707a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083l.094.083 4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.414 0z"
      />
    </svg> `;
  }
}
