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
    d: "M12.13 8.37a.47.47 0 01-.33.14l-3.93.14a.5.5 0 01-.52-.52l.14-3.93a.47.47 0 01.14-.33L10.5 1h-9a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9zm-.94-.94L9 7.5a.51.51 0 01-.5-.5l.07-2.16a.54.54 0 01.16-.35L13 .15a.52.52 0 01.73 0l2.08 2.08a.52.52 0 010 .73l-4.27 4.31a.54.54 0 01-.35.16z",
  }),
);

export default class NotesFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
