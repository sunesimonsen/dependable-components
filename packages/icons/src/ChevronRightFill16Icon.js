import { html } from "@dependable/view";

export default class ChevronRightFill16Icon {
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
        d="M5.22 3.625a1 1 0 011.476-1.343l.085.093 4 5a1 1 0 01.072 1.146l-.072.104-4 5a1 1 0 01-1.634-1.147l.072-.103L8.72 8l-3.5-4.375z"
      />
    </svg> `;
  }
}
