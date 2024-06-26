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
    d: "M2 6.455C2 3.44 4.465 1 7.5 1S13 3.44 13 6.455a5.45 5.45 0 01-3 4.86V13H5v-1.686a5.45 5.45 0 01-3-4.86zM8 8h.5c.667 0 .667-1 0-1h-2c-.667 0-.667 1 0 1H7v2c0 .667 1 .667 1 0V8zm-3 6h5v.727C10 15.43 9.43 16 8.727 16H6.273C5.57 16 5 15.43 5 14.727V14z",
  }),
);

export default class LightbulbFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
