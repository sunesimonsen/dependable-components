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
    d: "M13 16h-2.5a.5.5 0 01-.5-.5v-5a.501.501 0 00-.5-.5h-3a.5.5 0 00-.5.5v5a.5.5 0 01-.5.5H3a1 1 0 01-1-1V9h-.953a1.042 1.042 0 01-.972-.63.957.957 0 01.213-1.058L7.293.3a1.002 1.002 0 011.414 0l7.004 7.01a.958.958 0 01.214 1.06 1.042 1.042 0 01-.972.63H14v6a1 1 0 01-1 1z",
  }),
);

export default class HomeFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
