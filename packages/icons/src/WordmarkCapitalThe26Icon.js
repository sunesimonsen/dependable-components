import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "39",
    height: "26",
    focusable: "false",
    viewBox: "0 0 39 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M5.5 4.5H.9V2.3h11.6v2.2H7.9v13.9H5.5zm9-2.2h2.3v6.5a4.4 4.4 0 013.4-1.7c2.8 0 4.5 1.9 4.5 4.9v6.4h-2.4v-6.2c0-1.8-.9-3-2.7-3a2.8 2.8 0 00-2.8 3.1v6.1h-2.3zm12.1 10.6a5.7 5.7 0 015.8-5.8 5.6 5.6 0 015.7 5.7v.9h-9.2a3.4 3.4 0 003.5 2.9 3.5 3.5 0 003.3-2l1.9 1.1a5.5 5.5 0 01-5.2 3 5.6 5.6 0 01-5.8-5.8zm2.4-1.2h6.6a3 3 0 00-3.2-2.5 3.4 3.4 0 00-3.4 2.5z",
  }),
);

export default class WordmarkCapitalThe26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
