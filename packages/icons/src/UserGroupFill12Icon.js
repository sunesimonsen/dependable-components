import { html } from "@dependable/view";

export default class UserGroupFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="currentColor">
        <circle cx="3" cy="2" r="2" />
        <circle cx="8" cy="4.5" r="2.5" />
        <path
          d="M3 5C1.55 5 .34 6.03.06 7.4c-.06.31.18.6.5.6h4.89c.31 0 .55-.29.49-.6A3.003 3.003 0 003 5zm5 3c-2.01 0-3.67 1.48-3.96 3.41-.04.31.19.59.5.59h6.92c.31 0 .54-.28.5-.59A4.006 4.006 0 008 8z"
        />
      </g>
    </svg> `;
  }
}
