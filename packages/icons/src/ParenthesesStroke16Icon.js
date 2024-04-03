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
    d: "M2.56067 14.7891C2.64277 14.9218 2.78908 15 2.94516 15C3.31495 15 3.55114 14.5781 3.39963 14.2408C2.75069 12.796 2.3021 10.5419 2.3021 8.5C2.3021 6.46951 2.75077 4.20747 3.39981 2.75981C3.55116 2.42222 3.31471 2 2.94475 2C2.78888 2 2.64273 2.07788 2.56056 2.21032C1.49246 3.93184 1 6.0079 1 8.5C1 10.9922 1.4925 13.0619 2.56067 14.7891ZM12.0602 15C12.2165 15 12.3631 14.9215 12.445 14.7883C13.5076 13.0613 14 10.9918 14 8.5C14 6.00791 13.513 3.93185 12.4453 2.21034C12.3631 2.07788 12.217 2 12.0611 2C11.6912 2 11.4547 2.42222 11.6061 2.75981C12.2551 4.20747 12.7038 6.46951 12.7038 8.5C12.7038 10.5421 12.2551 12.7965 11.606 14.2412C11.4546 14.5783 11.6906 15 12.0602 15Z",
  }),
);

export default class ParenthesesStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
