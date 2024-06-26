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
    d: "M4 8c2.044 0 3.766 1.48 3.997 3.442a.5.5 0 01-.994.116C6.833 10.108 5.544 9 4 9S1.167 10.108.997 11.558a.5.5 0 01-.994-.116C.234 9.48 1.956 8 4 8zm0-6a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5.5-3a.5.5 0 01.492.41L10 .5V2h1.5a.5.5 0 01.492.41L12 2.5a.5.5 0 01-.5.5H10v1.5a.5.5 0 01-.992.09L9 4.5V3H7.5a.5.5 0 01-.492-.41L7 2.5a.5.5 0 01.5-.5H9V.5a.5.5 0 01.5-.5z",
  }),
);

export default class UserFollowStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
