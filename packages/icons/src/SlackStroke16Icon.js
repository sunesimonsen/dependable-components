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
    d: "M9.826 0a2.522 2.522 0 012.516 2.356l.006.166-.001 1.398A2.522 2.522 0 0115.217 8a2.522 2.522 0 01-1.573 4.342l-.166.006-1.398-.001A2.522 2.522 0 018 15.218a2.522 2.522 0 01-4.343-1.574l-.005-.166.001-1.398c-.294.148-.62.24-.965.262l-.166.006A2.522 2.522 0 01.782 8a2.522 2.522 0 011.574-4.343l.166-.006 1.398.001a2.507 2.507 0 01-.262-.965l-.006-.166A2.522 2.522 0 018 .782 2.511 2.511 0 019.826 0zM6.174 8.304c-.84 0-1.522.681-1.522 1.522v3.652a1.522 1.522 0 103.044 0V9.826c0-.84-.681-1.522-1.522-1.522zm3.652 3.653H8.304v1.521a1.522 1.522 0 101.522-1.521zM4.043 8.304H2.522a1.522 1.522 0 101.521 1.522V8.304zm9.435 0H9.826a1.522 1.522 0 100 3.044h3.652a1.522 1.522 0 100-3.044zM9.826 1c-.84 0-1.522.681-1.522 1.522v3.652a1.522 1.522 0 103.044 0V2.522c0-.84-.681-1.522-1.522-1.522zM6.174 4.652H2.522a1.522 1.522 0 100 3.044h3.652a1.522 1.522 0 100-3.044zm7.304 0c-.84 0-1.521.681-1.521 1.522v1.522h1.521a1.522 1.522 0 100-3.044zM6.174 1a1.522 1.522 0 100 3.043h1.522V2.522C7.696 1.682 7.015 1 6.174 1z",
  }),
);

export default class SlackStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
