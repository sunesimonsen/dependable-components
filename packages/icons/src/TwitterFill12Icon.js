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
    d: "M.0763914 0 3.60864 0 6.75369 4.49755 10.5303 0 11.6586 0 7.18498 5.11431 12 12 8.46775 12 5.18346 7.30333 1.12825 12 0 12 4.7531 6.6879z",
  }),
);

export default class TwitterFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
