import { html } from "@dependable/view";

export default class FolderClosedFill16Icon {
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
        d="M14 15H2c-.55 0-1-.45-1-1V3.5C1 2.67 1.67 2 2.5 2h5C8.33 2 9 2.67 9 3.5V4h5c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1z"
      />
    </svg> `;
  }
}
