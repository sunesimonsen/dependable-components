import { html } from "@dependable/view";

export default class ChevronLeftFill12Icon {
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
        d="M8.707 1.293a1 1 0 01.083 1.32l-.083.094L5.415 6l3.292 3.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 01-.083-1.32l.083-.094 4-4a1 1 0 011.414 0z"
      />
    </svg> `;
  }
}
