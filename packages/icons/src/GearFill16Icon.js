import { html } from "@dependable/view";

export default class GearFill16Icon {
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
        d="M14 8c0-.42-.04-.83-.13-1.22l1.42-1.04c.18-.13.26-.37.18-.58-.31-.8-.74-1.54-1.27-2.19a.51.51 0 00-.59-.14L12 3.54c-.61-.55-1.33-.97-2.12-1.23L9.68.54A.499.499 0 009.27.1C8.86.04 8.43 0 8 0c-.43 0-.85.03-1.26.1-.22.03-.39.22-.41.44l-.2 1.76c-.8.26-1.51.68-2.12 1.23L2.4 2.82a.52.52 0 00-.6.13C1.27 3.6.84 4.34.53 5.14c-.08.21 0 .45.18.58l1.42 1.04C2.05 7.16 2 7.58 2 8c0 .42.04.83.13 1.22L.71 10.26c-.18.13-.26.37-.18.58.31.8.74 1.54 1.27 2.19.14.17.39.23.59.14L4 12.46c.61.55 1.33.97 2.12 1.23l.19 1.76c.02.22.19.41.41.44a7.806 7.806 0 002.54.01c.22-.03.39-.22.41-.44l.2-1.76c.8-.26 1.51-.68 2.12-1.23l1.61.71c.2.09.45.04.59-.13.53-.65.96-1.39 1.27-2.19.08-.21 0-.45-.18-.58l-1.42-1.04c.09-.4.14-.82.14-1.24zm-6 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      />
    </svg> `;
  }
}