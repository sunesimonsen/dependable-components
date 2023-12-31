import { html } from "@dependable/view";

export default class LightbulbStroke12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <path d="M3.5 7.965a4 4 0 114 0V9.5h-4V7.965z" />
        <path stroke-linejoin="round" d="M4.5 5.5h2-2zm1 0v2-2z" />
      </g>
      <path fill="currentColor" d="M3 11h5a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
    </svg> `;
  }
}
