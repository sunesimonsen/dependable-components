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
    d: "m2.157 6.835 2.386 2.097a.296.296 0 0 0 .29.05c.1-.036.165-.12.167-.215V7h4.571c.237 0 .429-.224.429-.5S9.808 6 9.571 6H5V4.237c0-.213-.29-.317-.457-.165L2.157 6.169A.444.444 0 0 0 2 6.502c0 .125.057.245.157.333Z",
  }),
);

export default class ArrowLeftSmFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
