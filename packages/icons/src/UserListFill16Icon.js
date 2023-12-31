import { html } from "@dependable/view";

export default class UserListFill16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="currentColor">
        <circle cx="5" cy="5" r="3" />
        <path
          d="M9.47 14H.53a.5.5 0 01-.5-.55 5 5 0 019.94 0 .5.5 0 01-.5.55z"
        />
        <rect width="7" height="2" x="9" y="3" rx="1" ry="1" />
        <rect width="7" height="2" x="9" y="7" rx="1" ry="1" />
        <rect width="5" height="2" x="11" y="11" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
