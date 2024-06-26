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
    d: "M4.954 10c2.55 0 4.68 1.91 4.96 4.45.02.14-.03.28-.12.39-.09.11-.24.16-.38.16H.494a.48.48 0 01-.37-.17.508.508 0 01-.12-.39c.26-2.53 2.4-4.44 4.95-4.44zM5 3a3 3 0 110 6 3 3 0 010-6zm5.784-1.911l.07.057L12.5 2.793l1.646-1.647a.5.5 0 01.638-.057l.07.057a.5.5 0 010 .708L13.207 3.5l1.647 1.646a.5.5 0 01-.638.765l-.07-.057L12.5 4.207l-1.646 1.647a.5.5 0 01-.638.057l-.07-.057a.5.5 0 010-.708L11.793 3.5l-1.647-1.646a.5.5 0 01.638-.765z",
  }),
);

export default class UserUnfollowFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
