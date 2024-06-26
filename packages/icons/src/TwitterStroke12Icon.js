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
    d: "M0.0763914,0 L3.60864,0 L6.75369,4.49755 L10.5303,0 L11.6586,0 L7.18498,5.11431 L12,12 L8.46775,12 L5.18346,7.30333 L1.12825,12 L0,12 L4.7531,6.6879 L0.0763914,0 Z M1.46967,0.705882 L8.87381,11.2941 L10.6067,11.2941 L3.20258,0.705882 L1.46967,0.705882 Z",
  }),
);

export default class TwitterStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
