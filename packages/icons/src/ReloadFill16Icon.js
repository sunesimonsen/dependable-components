import { html } from "@dependable/htm";

export default class ReloadFill16Icon {
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
        stroke-width="2"
        d="M13.1 12c-1.2 1.5-3 2.5-5.1 2.5-3.6 0-6.5-2.9-6.5-6.5S4.4 1.5 8 1.5c2.2 0 4.1 1.1 5.3 2.7m.2-3.2v3c0 .3-.2.5-.5.5h-3"
      />
    </svg> `;
  }
}
