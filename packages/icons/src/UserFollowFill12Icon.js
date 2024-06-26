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
    d: "M4 8a4.031 4.031 0 00-3.995 3.41c-.04.31.191.59.504.59h6.982c.313 0 .545-.28.504-.59C7.698 9.45 6 8 4 8zm0-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm5.5-2a.5.5 0 01.492.41L10 .5V2h1.5a.5.5 0 01.492.41L12 2.5a.5.5 0 01-.5.5H10v1.5a.5.5 0 01-.992.09L9 4.5V3H7.5a.5.5 0 01-.492-.41L7 2.5a.5.5 0 01.5-.5H9V.5a.5.5 0 01.5-.5z",
  }),
);

export default class UserFollowFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
