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
    d: "M8 0a8 8 0 110 16A8 8 0 018 0zm0 1a7 7 0 00-1.196 13.898v-4.726H4.825V8.06h1.98V6.652c0-2.328 1.128-3.35 3.054-3.35.922 0 1.41.068 1.64.1v1.844h-1.313c-.818 0-1.103.78-1.103 1.657V8.06h2.396l-.326 2.113h-2.07v4.745A7.002 7.002 0 008 1z",
  }),
);

export default class FacebookStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
