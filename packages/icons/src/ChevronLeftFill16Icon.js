import { html } from "@dependable/view";

export default class ChevronLeftFill16Icon {
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
        d="M10.78 12.375a1 1 0 01-1.476 1.343l-.085-.093-4-5a1 1 0 01-.072-1.147l.072-.103 4-5a1 1 0 011.634 1.147l-.072.103L7.28 8l3.5 4.375z"
      />
    </svg> `;
  }
}
