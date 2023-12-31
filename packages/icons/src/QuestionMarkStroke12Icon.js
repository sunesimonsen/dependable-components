import { html } from "@dependable/view";

export default class QuestionMarkStroke12Icon {
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
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M5.5 7.5V7c0-.7.4-1.3 1-1.6.7-.4 1.2-1.3 1-2.2-.1-.8-.8-1.5-1.7-1.7-1-.2-2 .5-2.3 1.4"
      />
      <circle cx="5.5" cy="10" r="1" fill="currentColor" />
    </svg> `;
  }
}
