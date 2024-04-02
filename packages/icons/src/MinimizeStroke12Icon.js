import { html } from "@dependable/htm";

export default class MinimizeStroke12Icon {
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
        d="M8.5 11.5V9c0-.3.2-.5.5-.5h2.5m-8 3V9c0-.3-.2-.5-.5-.5H.5m3-8V3c0 .3-.2.5-.5.5H.5m8-3V3c0 .3.2.5.5.5h2.5M.5.5L3 3M11.5.5L9 3M.5 11.5L3 9m8.5 2.5L9 9"
      />
    </svg> `;
  }
}
