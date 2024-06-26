import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    focusable: "false",
    viewBox: "0 0 16 16",
  },
  h("path", {
    fill: "currentColor",
    d: "M.101855 0 4.81152 0 9.00492 5.99673 14.0404 0 15.5448 0 9.57998 6.81909 16 16 11.2903 16 6.91128 9.73778 1.50433 16 0 16 6.33747 8.9172z",
  }),
);

export default class TwitterFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
