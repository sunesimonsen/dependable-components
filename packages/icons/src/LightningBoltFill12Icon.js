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
    d: "M3.15 11.96c-.14 0-.25-.05-.34-.11-.29-.2-.36-.58-.2-1.03L4.3 6H3.24a.74.74 0 01-.62-.32c-.14-.21-.15-.48-.04-.74L4.42.66c.16-.38.57-.66.97-.66H9.1c.26 0 .49.12.62.32a.8.8 0 01.04.74L7.68 5h1.09c.33 0 .58.16.69.42.05.15.13.53-.34.98l-5.27 5.22c-.28.26-.52.34-.7.34z",
  }),
);

export default class LightningBoltFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
