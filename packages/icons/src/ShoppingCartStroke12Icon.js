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
    d: "M4.55 9.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm5.2 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-5.2 1a.25.25 0 100 .5.25.25 0 000-.5zm5.2 0a.25.25 0 100 .5.25.25 0 000-.5zM11 1a1 1 0 01.94 1.341l-.046.106-2 4a1 1 0 01-.77.545L9 7H5a1 1 0 01-.182-.017L4.309 8H10.5a.5.5 0 01.09.992L10.5 9H4.309a1 1 0 01-.94-1.34l.046-.107.621-1.244-1.93-3.862a1.034 1.034 0 01-.05-.116L1.39 1H.5A.5.5 0 01.008.59L0 .5A.5.5 0 01.41.008L.5 0h1.2a.5.5 0 01.398.197l.05.08.361.723H11zm0 1H3.009l1.938 3.876.033.084L5 6h4l2-4z",
  }),
);

export default class ShoppingCartStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
