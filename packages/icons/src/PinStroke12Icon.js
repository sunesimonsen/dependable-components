import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    focusable: "false",
    viewBox: "0 0 12 12",
  },
  h("path", {
    fill: "currentColor",
    d: "M6.37234843,0.0954661348 L6.44430009,0.155721034 L11.8443001,5.55572003 C11.9786001,5.69006003 12.0311001,5.88589003 11.9818001,6.06939003 C11.9408001,6.2223067 11.8343834,6.34729281 11.6938001,6.41309837 L11.6056001,6.44523003 L9.90494009,6.89978003 C9.75213176,6.9406217 9.59083037,6.9109842 9.46364009,6.82230272 L9.39176009,6.76210003 L8.91884009,6.28918003 L6.72086009,11.6693 C6.58912593,11.9916917 6.19527551,12.0956952 5.92358888,11.9038228 L5.85281009,11.8441 L3.38025009,9.37157003 L1.16987009,11.582 C0.962257094,11.7896 0.625653094,11.7896 0.418042094,11.582 C0.233498094,11.3973778 0.212993205,11.1109087 0.356527427,10.903724 L0.418042094,10.8301 L2.62842009,8.61974003 L0.155862094,6.14717003 C-0.0904361559,5.90087087 -0.0338370385,5.49746496 0.248251398,5.32124777 L0.330717094,5.27911003 L5.71080009,3.08113003 L5.23793009,2.60825003 C5.12608009,2.49640837 5.07100093,2.34193476 5.08411042,2.18743337 L5.10025009,2.09507003 L5.55480009,0.394366034 C5.60386009,0.210818034 5.74713009,0.0674015344 5.93064009,0.0181702344 C6.08355676,-0.0228557656 6.24502898,0.00672205383 6.37234843,0.0954661348 Z M6.52622009,3.89655003 L1.47325009,5.96090003 L6.03908009,10.5267 L8.10342009,5.47376003 L6.52622009,3.89655003 Z M6.34405009,1.55908003 L6.20663009,2.07325003 L9.92671009,5.79334003 L10.4409001,5.65592003 L6.34405009,1.55908003 Z",
  }),
);

export default class PinStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
