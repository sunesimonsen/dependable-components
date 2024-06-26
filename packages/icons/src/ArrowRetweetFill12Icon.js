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
    d: "M2.5 2h.012c.02 0 .041.002.062.005L2.5 2a.502.502 0 01.354.146l2 2A.5.5 0 014.5 5H3v2.5a1.5 1.5 0 001.356 1.493L4.5 9H6a.5.5 0 01.09.992L6 10H4.5a2.5 2.5 0 01-2.495-2.336L2 7.5V5H.5a.5.5 0 01-.354-.854l2-2 .013-.011a.503.503 0 01.039-.033l-.052.044A.502.502 0 012.5 2zm6.954 7.998l.021.001-.028-.002-.016-.003h-.002l-.034-.005a.513.513 0 01-.046-.012l-.04-.015a.494.494 0 01-.076-.04l-.035-.024-.005-.003-.001-.001-.014-.011a.5.5 0 00.01.008l.01.007a.503.503 0 01-.04-.033L7.147 7.854a.5.5 0 01.268-.847L7.5 7H9V4.5a1.5 1.5 0 00-1.356-1.493L7.5 3H6a.5.5 0 01-.09-.992L6 2h1.5a2.5 2.5 0 012.495 2.336L10 4.5V7h1.5a.5.5 0 01.41.788l-.056.066L9.84 9.866A.503.503 0 019.5 10l-.068-.006.022.004zM9.48 10h.02l-.025-.001h.005zm-.287-.105l-.001-.001-.004-.003.005.004z",
  }),
);

export default class ArrowRetweetFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
