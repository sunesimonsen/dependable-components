import { html } from "@dependable/view";

export default class ZendeskFill12Icon {
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
        d="M11 0a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h10zM5.692 4.584L2 9h3.692V4.584zm2.462 2.589A1.842 1.842 0 006.308 9H10c0-1.005-.83-1.827-1.846-1.827zM10 3H6.308v4.416L10 3zM5.692 3H2c0 1.005.83 1.827 1.846 1.827A1.842 1.842 0 005.692 3z"
      />
    </svg> `;
  }
}
