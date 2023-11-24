import { html } from "@dependable/view";

export default class WechatStroke16Icon {
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
        d="M6.65.5c3.667 0 6.65 2.455 6.65 5.47 0 .338-.05.67-.124.999C14.84 7.627 16 9.029 16 10.662c0 .994-.444 1.894-1.152 2.605l.275 2.233-2.038-1.104a5.714 5.714 0 01-2 .363c-2.397 0-4.392-1.44-4.824-3.333a7.675 7.675 0 01-2.895-.704l-2.92 1.21.447-3.224.014.01C.334 7.907 0 6.971 0 5.97 0 2.955 2.983.5 6.65.5zm4.435 7.071c-2.157 0-3.912 1.387-3.912 3.091 0 1.704 1.755 3.09 3.912 3.09 2.156 0 3.911-1.386 3.911-3.09 0-1.273-.98-2.368-2.376-2.841l-.037-.012a4.8 4.8 0 00-1.498-.238zM9.36 9.221a.706.706 0 110 1.412.706.706 0 010-1.412zm3.439 0a.706.706 0 110 1.412.706.706 0 010-1.412zM6.65 1.506c-3.114 0-5.648 2.003-5.648 4.465 0 2.322 2.254 4.236 5.123 4.445.037-.822.391-2.291 2.266-3.33 1.388-.77 3.022-.58 3.836-.412.046-.232.07-.467.07-.703 0-2.462-2.534-4.465-5.647-4.465zm-2.349 2.21A.959.959 0 114.3 5.633a.959.959 0 01.001-1.918zm5.227 0a.958.958 0 11-.002 1.915.958.958 0 01.002-1.916z"
      />
    </svg> `;
  }
}