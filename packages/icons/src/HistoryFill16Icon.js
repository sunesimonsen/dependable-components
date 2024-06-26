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
    d: "M8 0a8 8 0 11-8 8 .5.5 0 011 0 7 7 0 107-7c-1.752 0-3.25.644-4.45 1.842l1.304 1.304a.5.5 0 01-.268.847L4.5 5h-3a.5.5 0 01-.492-.41L1 4.5v-3a.5.5 0 01.788-.41l.066.056.988.99C4.222.755 5.97 0 8 0zm-.5 4.5a.5.5 0 01.492.41L8 5v3.359l2.812 2.25a.5.5 0 01.128.628l-.05.075a.5.5 0 01-.627.128l-.075-.05-3-2.4a.5.5 0 01-.18-.3L7 8.6V5a.5.5 0 01.5-.5z",
  }),
);

export default class HistoryFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
