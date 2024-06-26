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
    d: "M15 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h14zm-2.5 12a.5.5 0 110 1h-5a.5.5 0 110-1h5zM3.854 6.146l2.648 2.649a1 1 0 010 1.42l-2.65 2.64a.5.5 0 01-.705-.71l2.65-2.64-2.65-2.651a.5.5 0 11.707-.708zM15 4H1v11h14V4zm0-3H1v2h14V1z",
  }),
);

export default class TerminalWindowStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
