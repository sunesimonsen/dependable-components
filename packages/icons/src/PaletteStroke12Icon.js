import { html } from "@dependable/view";

export default class PaletteStroke12Icon {
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
        d="M.736 3.322C2.368.426 5.903-.812 8.634.56c1.646.827 2.307 2.72 1.536 4.297l-.089.168-.58 1.029a.938.938 0 00-.104.651.996.996 0 00.54.688c.079.047.18.078.294.103l.118.024.435.072.182.037c.513.119 1 .377 1.032 1.23.003.085-.001.168-.012.249-.106.813-.877 1.41-1.66 1.82l-.167.084-.276.13-.263.112-.247.098-.422.154c-1.737.605-3.798.764-5.609-.146C.272 9.818-.895 6.22.736 3.322zm7.449-1.87C5.948.33 2.985 1.367 1.607 3.814.26 6.205 1.223 9.177 3.791 10.466c1.309.657 2.906.693 4.516.198l.302-.1.395-.142.222-.088.232-.099.26-.12c.786-.388 1.233-.806 1.277-1.138l.003-.04v-.042c-.007-.186-.005-.224-.112-.257l-.12-.03-.144-.03-.45-.075c-.298-.054-.517-.117-.685-.217a1.995 1.995 0 01-1.07-1.382 1.934 1.934 0 01.134-1.184l.08-.158.58-1.029c.621-1.104.176-2.477-1.026-3.08zM7 2a1 1 0 110 2 1 1 0 010-2zM4 3a1 1 0 110 2 1 1 0 010-2zM3 6a1 1 0 110 2 1 1 0 010-2z"
      />
    </svg> `;
  }
}
