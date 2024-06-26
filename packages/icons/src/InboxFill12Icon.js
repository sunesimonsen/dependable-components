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
    d: "M4 8v1h4V8h3V1c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v7h3zm0-6h4c.28 0 .5.22.5.5S8.28 3 8 3H4c-.28 0-.5-.22-.5-.5S3.72 2 4 2zm0 2h4c.28 0 .5.22.5.5S8.28 5 8 5H4c-.28 0-.5-.22-.5-.5S3.72 4 4 4zm0 2h4c.28 0 .5.22.5.5S8.28 7 8 7H4c-.28 0-.5-.22-.5-.5S3.72 6 4 6zm5 3c0 .48-.35 1-1 1H4c-.65 0-1-.52-1-1H1v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9H9z",
  }),
);

export default class InboxFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
