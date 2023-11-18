import { html } from "@dependable/view";

export default class WechatStroke12Icon {
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
        d="M5.01.5c2.763 0 5.01 1.86 5.01 4.147 0 .223-.028.442-.07.66C11.16 5.827 12 6.873 12 8.09c0 .594-.209 1.144-.55 1.617l.22 1.792-1.41-.765a4.247 4.247 0 01-1.998.495c-1.785 0-3.279-1.06-3.646-2.47a5.708 5.708 0 01-2.16-.565l-1.997.828.305-2.2C.287 6.187 0 5.446 0 4.646 0 2.361 2.248.5 5.01.5zm3.252 5.453c-1.509 0-2.737.96-2.737 2.138 0 1.18 1.228 2.138 2.737 2.138 1.51 0 2.739-.959 2.739-2.138 0-.88-.686-1.636-1.66-1.963l-.034-.011a3.398 3.398 0 00-1.045-.164zm-1.264 1.08a.519.519 0 110 1.037.519.519 0 010-1.037zm2.522 0a.52.52 0 110 1.038.52.52 0 010-1.038zM5.01 1.5C2.8 1.5 1 2.913 1 4.647c0 1.6 1.53 2.925 3.504 3.12.062-.65.39-1.677 1.72-2.416.982-.544 2.122-.458 2.77-.341.018-.12.027-.242.027-.363 0-1.734-1.8-3.146-4.01-3.146zM3.288 2.99a.703.703 0 11-.002 1.407.703.703 0 01.002-1.407zm3.833 0a.703.703 0 11-.001 1.407.703.703 0 01.001-1.406z"
      />
    </svg> `;
  }
}
