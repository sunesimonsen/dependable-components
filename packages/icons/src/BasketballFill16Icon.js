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
    d: "M7 15.938A7.969 7.969 0 012.708 14L8 8.707l1 1A7.97 7.97 0 007 15v.938zm-5-2.646A7.969 7.969 0 01.063 9H1a7.97 7.97 0 005.292-2l1 1-5.291 5.292zM0 8a7.97 7.97 0 012-5.292L5.585 6.29A6.973 6.973 0 011 8H0zm2.708-6A7.97 7.97 0 018 0v1a6.973 6.973 0 01-1.71 4.584L2.709 2zM9 .063A7.969 7.969 0 0113.292 2L8 7.293l-1-1A7.97 7.97 0 009 1V.062zm5 2.646A7.969 7.969 0 0115.937 7H15a7.97 7.97 0 00-5.292 2l-1-1 5.291-5.292zM16 8a7.97 7.97 0 01-2 5.292L10.415 9.71A6.973 6.973 0 0115 8h1zm-2.708 6A7.97 7.97 0 018 16v-1c0-1.753.644-3.356 1.71-4.584L13.291 14z",
  }),
);

export default class BasketballFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
