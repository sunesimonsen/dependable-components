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
    d: "M4.854 10.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-4-4-.037-.042-.042-.062-.03-.06-.02-.062-.012-.054-.003-.031L0 6.489c0-.02.002-.042.005-.063L0 6.5l.003-.053.014-.075.02-.063.052-.093.046-.057 4.011-4.013a.5.5 0 01.765.638l-.057.07L1.707 6H8.5a7.5 7.5 0 017.5 7.5.5.5 0 11-1 0 6.5 6.5 0 00-6.267-6.496L8.5 7H1.707l3.147 3.146z",
  }),
);

export default class ArrowLeftUpStroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
