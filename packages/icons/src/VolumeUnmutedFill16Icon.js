import { html } from "@dependable/view";

export default class VolumeUnmutedFill16Icon {
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
        d="M9 15.29c-.26 0-.51-.1-.71-.29l-4-4H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h3.29l4-4a1.002 1.002 0 011.71.71V14.3a.986.986 0 01-1 .99z"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        d="M11.77 9.77c.45-.45.73-1.08.73-1.77s-.28-1.31-.73-1.77m2.17 5.6c.97-.99 1.56-2.34 1.56-3.83 0-1.52-.62-2.89-1.61-3.89"
      />
    </svg> `;
  }
}
