import { html } from "@dependable/htm";

export default class PuzzlePieceStroke12Icon {
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
        stroke-linejoin="round"
        d="M11.39 5.73L9.73 4.07c.67-.15 1.17-.75 1.17-1.47 0-.83-.68-1.51-1.51-1.51-.72 0-1.31.5-1.47 1.17L6.27.61a.368.368 0 00-.53 0L4.07 2.27c.67.15 1.17.75 1.17 1.47 0 .83-.68 1.51-1.51 1.51-.72 0-1.31-.5-1.47-1.17L.61 5.73c-.15.15-.15.39 0 .53l1.66 1.66c-.67.16-1.17.76-1.17 1.47 0 .83.68 1.51 1.51 1.51.72 0 1.31-.5 1.47-1.17l1.66 1.66c.15.15.39.15.53 0l1.66-1.66c-.67-.15-1.18-.75-1.18-1.47 0-.83.68-1.51 1.51-1.51.72 0 1.31.5 1.47 1.17l1.66-1.66c.15-.14.15-.38 0-.53z"
      />
    </svg> `;
  }
}
