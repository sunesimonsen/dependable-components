import { html } from "@dependable/view";

export default class UserGroupFill16Icon {
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
        <circle cx="11" cy="6" r="3" />
        <circle cx="4.5" cy="3.5" r="2.5" />
        <path
          d="M15.45 15H6.53c-.14 0-.28-.06-.37-.17s-.14-.25-.12-.39C6.3 11.91 8.44 10 10.99 10c2.55 0 4.68 1.91 4.96 4.45.02.14-.03.28-.12.39s-.24.16-.38.16zm-8.12-5H1.67c-.16 0-.31-.08-.41-.21a.53.53 0 01-.06-.46A3.508 3.508 0 014.5 7c1.48 0 2.81.94 3.3 2.34.05.15.03.32-.06.46-.09.12-.25.2-.41.2z"
        />
      </g>
    </svg> `;
  }
}
