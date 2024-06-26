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
    d: "M10 2.503l1.29 1.248a.426.426 0 00.588 0 .393.393 0 000-.57L10.59 1.934 11.88.685a.394.394 0 00-.013-.557.427.427 0 00-.576-.013L10 1.364 8.71.118a.426.426 0 00-.4-.104.41.41 0 00-.295.284.394.394 0 00.108.389L9.41 1.933 8.122 3.18a.393.393 0 000 .57.423.423 0 00.589 0L10 2.504v-.002zM4 8a4.031 4.031 0 00-3.995 3.41c-.04.31.191.59.504.59h6.982c.313 0 .545-.28.504-.59C7.698 9.45 6 8 4 8zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z",
  }),
);

export default class UserUnfollowFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
