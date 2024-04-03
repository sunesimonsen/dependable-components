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
    d: "M12.29 15.56c-.19 0-.38-.05-.54-.16L8 12.97 4.25 15.4c-.35.23-.79.21-1.13-.03a.99.99 0 01-.38-1.07l1.15-4.32L.42 7.16A.99.99 0 01.1 6.08c.13-.4.48-.67.9-.69l4.46-.24L7.07.98c.15-.39.51-.64.93-.64s.78.25.93.64l1.61 4.17 4.46.24c.42.02.77.29.9.69.13.4 0 .82-.32 1.09l-3.47 2.82 1.15 4.32c.11.4-.04.82-.38 1.07-.17.11-.38.18-.59.18z",
  }),
);

export default class StarFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
