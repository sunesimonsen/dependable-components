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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M.9 8.4l2.8 2.8c.2.2.5.2.7 0l6.8-6.8c.2-.2.2-.5 0-.7L8.4.9c-.2-.2-.5-.2-.7 0L.9 7.6c-.2.2-.2.6 0 .8zm3.6-3.9l3 3m-1 4h5",
  }),
);

export default class EraserStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
