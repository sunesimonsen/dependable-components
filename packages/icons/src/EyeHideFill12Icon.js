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
    d: "M3.82 9.595C4.47 9.844 5.197 10 6 10c3.1 0 5.08-2.33 5.79-3.34.28-.39.28-.93 0-1.32a9.059 9.059 0 0 0-1.81-1.906L8.328 5.086a2.5 2.5 0 0 1-3.241 3.241L3.82 9.596ZM5.917 7.498 6 7.5a1.5 1.5 0 0 0 1.498-1.583l-1.582 1.58Zm.166-2.996-1.58 1.582a1.5 1.5 0 0 1 1.581-1.581ZM6.914 3.672a2.5 2.5 0 0 0-3.241 3.241L2.02 8.567A9.059 9.059 0 0 1 .21 6.66c-.28-.39-.28-.92 0-1.32C.92 4.33 2.9 2 6 2c.803 0 1.53.156 2.18.405L6.914 3.672Zm-.997 3.826L6 7.5a1.5 1.5 0 0 0 1.498-1.583l-1.582 1.58ZM6.083 4.502a1.5 1.5 0 0 0-1.581 1.581l1.582-1.58Zm4.784-2.726a.455.455 0 0 0-.58-.695l-.063.052-9.09 9.091a.455.455 0 0 0 .579.695l.063-.052 9.09-9.091Z",
  }),
);

export default class EyeHideFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
