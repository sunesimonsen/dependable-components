import { html } from "@dependable/view";

export default class SlackFill12Icon {
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
        d="M4.435 0a1.304 1.304 0 100 2.609h1.304V1.304A1.304 1.304 0 004.435 0zm3.13 0c-.72 0-1.304.584-1.304 1.304v3.13a1.304 1.304 0 102.609 0v-3.13C8.87.584 8.286 0 7.565 0zm-6.26 3.13a1.304 1.304 0 100 2.61h3.13a1.304 1.304 0 100-2.61h-3.13zm9.39 0c-.72 0-1.304.584-1.304 1.305v1.304h1.305a1.304 1.304 0 100-2.609zm-9.39 3.13a1.304 1.304 0 101.304 1.305V6.261H1.304zm3.13 0c-.72 0-1.305.585-1.305 1.305v3.13a1.304 1.304 0 102.61 0v-3.13c0-.72-.585-1.304-1.305-1.304zm3.13 0a1.304 1.304 0 100 2.61h3.13a1.304 1.304 0 100-2.61h-3.13zM6.261 9.392v1.305A1.304 1.304 0 107.565 9.39H6.261z"
      />
    </svg> `;
  }
}
