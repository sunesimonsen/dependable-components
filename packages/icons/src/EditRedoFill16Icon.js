import { html } from "@dependable/view";

export default class EditRedoFill16Icon {
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
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M.5 11.25A7.75 7.75 0 018.25 3.5c2.66 0 5.21 1.44 6.75 3.56"
      />
      <path
        fill="currentColor"
        d="M11.21 8H15c.55 0 1-.45 1-1V3.21c0-.45-.54-.67-.85-.35l-4.29 4.29c-.32.31-.1.85.35.85z"
      />
    </svg> `;
  }
}
