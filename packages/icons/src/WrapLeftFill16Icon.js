import { html } from "@dependable/view";

export default class WrapLeftFill16Icon {
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
        d="M2 15a1 1 0 010-2h12a1 1 0 010 2H2zm8-4a1 1 0 010-2h4a1 1 0 010 2h-4zm0-4a1 1 0 110-2h4a1 1 0 010 2h-4zM6 5H2a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V6a1 1 0 00-1-1zM2 3a1 1 0 110-2h12a1 1 0 010 2H2z"
      />
    </svg> `;
  }
}
