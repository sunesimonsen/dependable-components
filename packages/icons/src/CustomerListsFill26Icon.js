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
    d: "M22.136 10h-5.282c-.472 0-.854-.443-.854-.989V8.99c0-.546.382-.989.854-.989h5.282c.476 0 .864.45.864 1s-.388 1-.864 1zm0 4h-5.282c-.472 0-.854-.443-.854-.989v-.022c0-.546.382-.989.854-.989h5.282c.476 0 .864.45.864 1s-.388 1-.864 1zm.022 4h-3.327c-.46 0-.831-.443-.831-.989v-.022c0-.546.372-.989.831-.989h3.327c.463 0 .842.45.842 1s-.379 1-.842 1zM10 13a4 4 0 110-8 4 4 0 010 8zm-6.03 8.073c-.583 0-1.048-.518-.96-1.093A7.072 7.072 0 0110 14a7.072 7.072 0 016.989 5.98c.09.575-.376 1.093-.958 1.093H3.97z",
  }),
);

export default class CustomerListsFill26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
