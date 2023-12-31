import { html } from "@dependable/view";

export default class AnswerBot26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <path fill="currentColor" d="M0 0h26v26H0z" />
      <rect width="3" height="3" x="4" y="11" rx="3" ry="3" />
      <rect width="3" height="3" x="19" y="11" rx="3" ry="3" />
    </svg> `;
  }
}
