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
    d: "M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h2.5c.28 0 .5-.22.5-.5v-4c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v4c0 .28.22.5.5.5H13c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM7 9H5V7h2v2zm0-4H5V3h2v2zm4 4H9V7h2v2zm0-4H9V3h2v2z",
  }),
);

export default class BuildingFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
