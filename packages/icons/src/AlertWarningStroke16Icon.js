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
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    d: "M.88 13.77L7.06 1.86c.19-.36.7-.36.89 0l6.18 11.91c.17.33-.07.73-.44.73H1.32c-.37 0-.61-.4-.44-.73zM7.5 6v3.5",
  }),
  h("circle", { cx: "7.5", cy: "12", r: "1", fill: "currentColor" }),
);

export default class AlertWarningStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
