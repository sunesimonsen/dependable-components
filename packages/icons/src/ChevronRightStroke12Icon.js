import { html } from "@dependable/view";

export default class ChevronRightStroke12Icon {
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
        d="M3.646 10.354a.5.5 0 01-.057-.638l.057-.07L7.293 6 3.646 2.354a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057l.07.057 4 4a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.708 0z"
      />
    </svg> `;
  }
}
