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
    d: "M5.538 3.376V10H0l5.538-6.624zm0-2.376c0 1.508-1.246 2.741-2.769 2.741C1.246 3.741 0 2.508 0 1h5.538zm.924 9c0-1.508 1.246-2.741 2.769-2.741C10.754 7.259 12 8.492 12 10H6.462zm0-2.376V1H12L6.462 7.624z",
  }),
);

export default class ZendeskStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
