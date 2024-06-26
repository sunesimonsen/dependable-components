import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 20 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M13.41 0H2C.9 0 0 .9 0 2v22c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.58L13.41 0zM6 14.5V17H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V14H6.5c-.28 0-.5.22-.5.5zM16.5 21h-9a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v5a.5.5 0 01-.5.5zM15 7a2 2 0 01-2-2V1l6 6h-4z",
  }),
);

export default class FilePresentation26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
