import { html } from "@dependable/view";

export default class ThumbsDownFill16Icon {
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
        <path
          d="M8 16a1.94 1.94 0 01-2-2v-4H1.5A1.5 1.5 0 010 8.5C.25 2.54 1 0 2.5 0H11a1 1 0 011 1v8.1a1 1 0 01-.58.95c-.47.16-1.42.82-1.42 4A1.94 1.94 0 018 16z"
        />
        <rect width="3" height="10" x="13" rx="1" ry="1" />
      </g>
    </svg> `;
  }
}
