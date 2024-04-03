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
    d: "M2.49809 14.4871C2.68615 14.8138 3.04224 15 3.41915 15C4.31375 15 4.90128 13.9736 4.57001 13.1426C3.97855 11.6589 3.5 9.76589 3.5 8C3.5 6.24681 3.97703 4.34714 4.5672 2.86113C4.89716 2.03034 4.30827 1 3.41435 1C3.04024 1 2.68656 1.18409 2.49895 1.50776C1.47459 3.27501 1 5.43785 1 7.99627C1 10.5472 1.47433 12.7089 2.49809 14.4871ZM12.5809 15C12.9578 15 13.3138 14.8138 13.5019 14.4871C14.5257 12.7089 15 10.5472 15 7.99627C15 5.43785 14.5254 3.27501 13.501 1.50776C13.3134 1.18409 12.9598 1 12.5857 1C11.6917 1 11.0964 2.03442 11.4127 2.87053C11.9737 4.35389 12.4081 6.24717 12.4081 7.99627C12.4081 9.75874 11.972 11.6495 11.4093 13.133C11.0921 13.9695 11.6863 15 12.5809 15Z",
  }),
);

export default class ParenthesesFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
