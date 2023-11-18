import { html } from "@dependable/view";

export default class BasketballFill12Icon {
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
        d="M2.126 10.582L6 6.707l1.129 1.129A4.98 4.98 0 006 11v1a5.976 5.976 0 01-3.874-1.418zm-.708-.708A5.976 5.976 0 010 6h1a4.98 4.98 0 003.164-1.129L5.293 6 1.418 9.874zM.083 5a5.976 5.976 0 011.335-2.874L3.453 4.16A3.983 3.983 0 011 5H.083zm2.043-3.582A5.976 5.976 0 015 .083V1c0 .924-.314 1.775-.84 2.453L2.126 1.418zM6 0c1.477 0 2.83.534 3.874 1.418L6 5.293 4.871 4.164A4.98 4.98 0 006 1V0zm4.582 2.126A5.976 5.976 0 0112 6h-1a4.98 4.98 0 00-3.164 1.129L6.707 6l3.875-3.874zM11.917 7a5.976 5.976 0 01-1.335 2.874L8.547 7.84A3.983 3.983 0 0111 7h.917zm-2.043 3.582A5.976 5.976 0 017 11.917V11c0-.924.314-1.775.84-2.453l2.034 2.035z"
      />
    </svg> `;
  }
}
