import { html } from "@dependable/view";

export default class TerminalWindowFill12Icon {
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
        d="M0 3v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V3H0zm9.5 7h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5zm-7 .12a.62.62 0 01-.44-.18.628.628 0 010-.88L4.12 7 2.06 4.94a.628.628 0 010-.88c.24-.24.64-.24.88 0L5.09 6.2c.44.44.44 1.15 0 1.59L2.94 9.94a.62.62 0 01-.44.18zM12 2V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v1h12z"
      />
    </svg> `;
  }
}
