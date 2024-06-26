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
    d: "M6 0c3.38 0 6 2.477 6 5.821 0 3.343-2.62 5.82-6 5.82-.607 0-1.19-.08-1.737-.23a.457.457 0 00-.321.023l-1.19.525a.482.482 0 01-.674-.424l-.032-1.068a.483.483 0 00-.162-.342C.717 9.081 0 7.57 0 5.821 0 2.477 2.619 0 6 0zm3.19 4.1L7.296 5.537a.36.36 0 01-.433.001L5.46 4.487a.899.899 0 00-1.3.24L2.397 7.523c-.17.267.16.571.414.379l1.893-1.437a.362.362 0 01.433-.001l1.402 1.051a.9.9 0 001.3-.24l1.763-2.796c.17-.268-.16-.57-.412-.379z",
  }),
);

export default class MessengerFill12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
