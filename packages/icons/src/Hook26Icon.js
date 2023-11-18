import { html } from "@dependable/view";

export default class Hook26Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      focusable="false"
      viewBox="0 0 26 26"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M13 4a3 3 0 011 5.829V18c0 2.142.75 3 2.5 3 1.445 0 2.209-.586 2.43-1.997l-.928-.001c-.89 0-1.337-1.077-.707-1.707l2-2c.63-.63 1.707-.184 1.707.707v2l-.003.045-.003.216C20.911 21.29 19.336 23 16.5 23c-1.563 0-2.742-.519-3.5-1.491-.758.972-1.937 1.491-3.5 1.491C6.582 23 5 21.191 5 18v-1.998c0-.852.986-1.297 1.623-.783l.084.076 2 2c.603.602.22 1.614-.593 1.701L8 19.002h-.93C7.29 20.415 8.054 21 9.5 21c1.75 0 2.5-.858 2.5-3V9.83A3.001 3.001 0 0113 4zm0 2a1 1 0 100 2 1 1 0 000-2z"
      />
    </svg> `;
  }
}
