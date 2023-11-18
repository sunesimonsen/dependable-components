import { html } from "@dependable/view";

export default class NotesStroke16Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      focusable="false"
      viewBox="0 0 16 16"
      ...${props}
    >
      <g fill="none" stroke="currentColor">
        <path
          stroke-linejoin="round"
          d="M10.51 8.4l-3.01.1.1-3.01L12.59.5l2.91 2.91-4.99 4.99z"
        />
        <path
          stroke-linecap="round"
          d="M7.41 1.5H2.09a.58.58 0 00-.59.59v11.82a.58.58 0 00.59.59h11.82a.58.58 0 00.59-.59V8.59"
        />
      </g>
    </svg> `;
  }
}
