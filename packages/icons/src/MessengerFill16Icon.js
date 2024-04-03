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
    d: "M8 0c4.507 0 8 3.302 8 7.761s-3.493 7.76-8 7.76c-.81 0-1.588-.106-2.316-.308a.635.635 0 00-.427.033l-1.587.7a.642.642 0 01-.899-.567l-.042-1.422a.65.65 0 00-.216-.456C.956 12.109 0 10.093 0 7.761 0 3.302 3.492 0 8 0zm4.252 5.467L9.729 7.383a.483.483 0 01-.579.001l-1.868-1.4a1.2 1.2 0 00-1.735.32L3.196 10.03c-.226.358.214.762.551.506L6.271 8.62a.481.481 0 01.578-.002l1.869 1.403a1.2 1.2 0 001.735-.32l2.35-3.728c.227-.358-.214-.762-.551-.506z",
  }),
);

export default class MessengerFill16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
