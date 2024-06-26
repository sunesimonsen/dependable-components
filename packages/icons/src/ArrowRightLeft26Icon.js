import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    focusable: "false",
    viewBox: "0 0 26 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M7.293 14.293c.602-.603 1.614-.22 1.701.593L9 15v3h13a1 1 0 01.117 1.993L22 20H8.999L9 23c0 .852-.986 1.297-1.623.783l-.084-.076-4-4a1 1 0 01-.083-1.32l.083-.094 4-4zM17 3c0-.852.986-1.297 1.623-.783l.084.076 4 4a1 1 0 01.083 1.32l-.083.094-4 4c-.602.603-1.614.22-1.701-.593L17 11V8H4a1 1 0 01-.117-1.993L4 6h13V3z",
  }),
);

export default class ArrowRightLeft26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
