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
    d: "M0.101855,0 L4.81152,0 L9.00492,5.99673 L14.0404,0 L15.5448,0 L9.57997,6.81909 L16,16 L11.2903,16 L6.91128,9.73778 L1.50433,16 L0,16 L6.33747,8.9172 L0.101855,0 Z M1.95956,0.941176 L11.8317,15.0588 L14.1423,15.0588 L4.27011,0.941176 L1.95956,0.941176 Z",
  }),
);

export default class TwitterStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
