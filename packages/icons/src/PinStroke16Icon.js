import { html } from "@dependable/htm";

export default class PinStroke16Icon {
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
        d="M8.48872013,0.159015 C8.35154013,0.0218295003 8.15157013,-0.0317179997 7.96419013,0.0185546003 C7.77681013,0.0688272003 7.63050013,0.215277 7.58040013,0.402708 L6.96151013,2.71828 C6.91147013,2.90553 6.96505013,3.10526 7.10211013,3.24232 L7.93845013,4.07866 L0.318722134,7.19163 C-0.0202780659,7.33013 -0.108734866,7.76925 0.150207134,8.0282 L3.67712013,11.5551 L0.539654134,14.6926 C0.327651134,14.9046 0.327651134,15.2483 0.539654134,15.4603 C0.751657134,15.6723 1.09538013,15.6723 1.30738013,15.4603 L4.44485013,12.3229 L7.97177013,15.8498 C8.23071013,16.1087 8.66984013,16.0203 8.80833013,15.6813 L11.9213001,8.06153 L12.7577001,8.89793 C12.8948001,9.03498 13.0945001,9.08857 13.2817001,9.03852 L15.5973001,8.41964 C15.7847001,8.36954 15.9312001,8.22323 15.9814001,8.03584 C16.0317001,7.84846 15.9782001,7.64849 15.8410001,7.51131 L8.48872013,0.159015 Z M8.77111013,4.91133 L11.0886001,7.22885 L8.12950013,14.4721 L1.52794013,7.87047 L8.77111013,4.91133 Z M8.38635013,1.59216 L14.4079001,7.61373 L13.3040001,7.90879 L8.09130013,2.6961 L8.38635013,1.59216 Z"
      />
    </svg> `;
  }
}
