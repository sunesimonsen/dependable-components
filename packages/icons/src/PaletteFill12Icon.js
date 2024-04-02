import { html } from "@dependable/htm";

export default class PaletteFill12Icon {
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
        d="M.736 3.322C2.368.426 5.903-.812 8.634.56c1.646.827 2.307 2.72 1.536 4.297l-.089.168-.58 1.029a.938.938 0 00-.104.651.996.996 0 00.54.688c.079.047.18.078.294.103l.118.024.435.072.182.037c.513.119 1 .377 1.032 1.23.003.085-.001.168-.012.249-.106.813-.877 1.41-1.66 1.82l-.167.084-.276.13-.263.112-.247.098-.422.154c-1.737.605-3.798.764-5.609-.146C.272 9.818-.895 6.22.736 3.322zM7 4a1 1 0 100-2 1 1 0 000 2zM4 5a1 1 0 100-2 1 1 0 000 2zM3 8a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg> `;
  }
}
