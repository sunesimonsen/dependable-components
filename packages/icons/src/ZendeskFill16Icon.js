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
    d: "M14.667 0C15.403 0 16 .597 16 1.333v13.334c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 010 14.667V1.333C0 .597.597 0 1.333 0h13.334zM7.615 6.348L3 11.5h4.615V6.348zm3.077 3.02c-1.214 0-2.217.878-2.302 1.98l-.005.152H13c0-1.173-1.038-2.132-2.308-2.132zM13 4.5H8.385v5.152L13 4.5zm-5.385 0H3c0 1.173 1.038 2.132 2.308 2.132 1.214 0 2.217-.878 2.302-1.98l.005-.152z",
  }),
);

export default class ZendeskFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
