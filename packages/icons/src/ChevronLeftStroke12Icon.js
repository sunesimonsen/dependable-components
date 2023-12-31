import { html } from "@dependable/view";

export default class ChevronLeftStroke12Icon {
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
        d="M8.354 1.646a.5.5 0 01.057.638l-.057.07L4.707 6l3.647 3.646a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 01-.057-.638l.057-.07 4-4a.5.5 0 01.708 0z"
      />
    </svg> `;
  }
}
