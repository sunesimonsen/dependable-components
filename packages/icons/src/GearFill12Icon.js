import { html } from "@dependable/view";

export default class GearFill12Icon {
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
        d="M10.5 6c0-.31-.03-.62-.09-.92l1.06-.78c.14-.1.19-.28.13-.44-.23-.6-.55-1.15-.95-1.64a.371.371 0 00-.44-.1L9 2.65c-.46-.41-1-.73-1.59-.92L7.26.41a.353.353 0 00-.3-.33C6.64.03 6.33 0 6 0c-.32 0-.64.03-.95.07-.16.03-.28.17-.3.34L4.6 1.72c-.6.2-1.14.52-1.59.93L1.8 2.11a.368.368 0 00-.44.1C.95 2.7.63 3.26.4 3.85c-.06.16 0 .34.13.44l1.07.78c-.07.3-.1.61-.1.93 0 .31.03.62.09.92L.53 7.7c-.14.1-.19.28-.13.44.23.6.55 1.15.95 1.64.11.13.29.17.44.1L3 9.35c.46.41 1 .73 1.59.92l.14 1.32c.02.17.14.3.31.33.32.05.63.08.96.08.32 0 .64-.03.95-.07.16-.03.29-.16.31-.33l.15-1.32c.6-.2 1.14-.51 1.59-.92l1.21.53c.15.07.34.03.44-.1.4-.49.72-1.04.95-1.64a.39.39 0 00-.13-.44l-1.07-.78c.07-.3.1-.61.1-.93zM6 7.5c-.83 0-1.5-.67-1.5-1.5S5.17 4.5 6 4.5s1.5.67 1.5 1.5S6.83 7.5 6 7.5z"
      />
    </svg> `;
  }
}
