import { html } from "@dependable/view";

export default class ChevronUpFill16Icon {
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
        d="M3.625 10.78a1 1 0 01-1.343-1.476l.093-.085 5-4a1 1 0 011.147-.072l.103.072 5 4a1 1 0 01-1.147 1.634l-.103-.072L8 7.28l-4.375 3.5z"
      />
    </svg> `;
  }
}
