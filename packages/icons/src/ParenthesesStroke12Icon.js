import { html } from "@dependable/view";

export default class ParenthesesStroke12Icon {
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
        d="M2.37547 10.8186C2.45909 10.9344 2.5948 11 2.7377 11C3.12006 11 3.36112 10.5434 3.19907 10.1971C2.67883 9.08527 2.32486 7.47793 2.32486 5.99734C2.32486 4.52713 2.67784 2.91433 3.19688 1.80385C3.35856 1.45795 3.11746 1 2.73563 1C2.59397 1 2.45935 1.06469 2.37605 1.17928C1.43461 2.47439 1 4.08041 1 5.99734C1 7.9088 1.43443 9.51432 2.37547 10.8186ZM9.2623 11C9.4052 11 9.54091 10.9344 9.62453 10.8186C10.5656 9.51432 11 7.9088 11 5.99734C11 4.08041 10.5654 2.47439 9.62395 1.17928C9.54065 1.06469 9.40603 1 9.26436 1C8.88254 1 8.64144 1.45795 8.80312 1.80385C9.32216 2.91433 9.67514 4.52713 9.67514 5.99734C9.67514 7.47793 9.32117 9.08527 8.80092 10.1971C8.63888 10.5434 8.87994 11 9.2623 11Z"
      />
    </svg> `;
  }
}