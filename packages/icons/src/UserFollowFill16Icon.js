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
    d: "M4.954 10c2.55 0 4.68 1.91 4.96 4.45.02.14-.03.28-.12.39-.09.11-.24.16-.38.16H.494a.48.48 0 01-.37-.17.508.508 0 01-.12-.39c.26-2.53 2.4-4.44 4.95-4.44zM5 3a3 3 0 110 6 3 3 0 010-6zm7.5-3a.5.5 0 01.5.5V3h2.5a.5.5 0 01.09.992L15.5 4H13v2.5a.5.5 0 01-.41.492L12.5 7a.5.5 0 01-.5-.5V4H9.5a.5.5 0 01-.09-.992L9.5 3H12V.5a.5.5 0 01.41-.492z",
  }),
);

export default class UserFollowFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
