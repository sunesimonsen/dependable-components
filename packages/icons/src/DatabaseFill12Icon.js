import { html } from "@dependable/view";

export default class DatabaseFill12Icon {
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
        d="M6 0C3.59 0 1 .63 1 2.02v7.97C1 11.37 3.59 12 6 12s5-.63 5-2.02V2.02C11 .63 8.41 0 6 0zm3.69 9.4c-.92.38-2.26.6-3.69.6-1.43 0-2.77-.22-3.69-.6-.25-.11-.38-.4-.27-.65s.4-.38.65-.27C3.5 8.81 4.7 9 6 9c1.3 0 2.51-.19 3.31-.53.25-.1.55.01.65.27a.5.5 0 01-.27.66zm0-2.94c-.92.38-2.26.6-3.69.6-1.43 0-2.77-.22-3.69-.6a.5.5 0 01-.27-.65.5.5 0 01.65-.27c.8.33 2.01.52 3.31.52 1.3 0 2.51-.19 3.31-.52.25-.11.55.01.65.27.11.25-.01.55-.27.65zm0-3.06C8.77 3.78 7.43 4 6 4c-1.43 0-2.77-.22-3.69-.6a.5.5 0 01-.27-.65c.11-.26.4-.38.65-.27C3.49 2.81 4.7 3 6 3c1.3 0 2.51-.19 3.31-.52.25-.1.55.01.65.27.11.25-.01.54-.27.65z"
      />
    </svg> `;
  }
}