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
    d: "M5.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-8 .9a.6.6 0 100 1.2.6.6 0 000-1.2zm8 0a.6.6 0 100 1.2.6.6 0 000-1.2zM15 2a1 1 0 01.965 1.262l-.037.11-2 5a1 1 0 01-.807.62L13 9H6c-.053 0-.105-.004-.156-.012L5.04 11h9.46a.5.5 0 01.09.992L14.5 12H5.039a1 1 0 01-.969-1.25l.04-.121.853-2.135L2.152.999.5 1A.5.5 0 01.008.59L0 .5A.5.5 0 01.41.008L.5 0h2a.5.5 0 01.43.245l.038.08L3.597 2H15zm0 1H4l2 5h7l2-5z",
  }),
);

export default class ShoppingCartStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
