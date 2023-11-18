import { html } from "@dependable/view";

export default class BoldFill16Icon {
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
        fill="currentColor"
        d="M7.5 0C9.952 0 12 2.048 12 4.5a4.483 4.483 0 01-1.27 3.108C12.078 8.39 13 9.855 13 11.5c0 2.452-2.048 4.5-4.5 4.5H4a1 1 0 01-1-1V1a1 1 0 011-1h3.5zM5 14h3.5c1.348 0 2.5-1.152 2.5-2.5S9.848 9 8.5 9H5v5zM7.5 2H5v5h2.5C8.848 7 10 5.848 10 4.5S8.848 2 7.5 2z"
      />
    </svg> `;
  }
}
