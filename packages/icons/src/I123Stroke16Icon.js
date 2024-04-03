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
    d: "M14.5 4a.5.5 0 01.5.5c0 .27-.19.656-.595 1.211l-.242.32-.137.173-.307.374-.35.413-.109.122.116.031c.912.27 1.403.904 1.56 1.817l.025.164.012.11.017.214.008.243L15 10c0 .258-.059.61-.24.974C14.443 11.606 13.853 12 13 12c-1.276 0-2-.724-2-2a.5.5 0 111 0c0 .724.276 1 1 1 .46 0 .713-.169.865-.474.1-.199.135-.41.135-.526l-.002-.275-.012-.302-.017-.173C13.862 8.398 13.447 8 12.25 8a.5.5 0 01-.372-.834l.395-.444.357-.41.318-.377.278-.338.238-.298L13.69 5H11.5a.5.5 0 01-.492-.41L11 4.5a.5.5 0 01.41-.492L11.5 4h3zm-9 2c0-2.667 4-2.667 4 0 0 .773-.277 1.413-.856 2.18l-.199.253-.781.939c-.452.559-.754 1.016-.951 1.489L6.658 11H9a.5.5 0 01.492.41l.008.09a.5.5 0 01-.41.492L9 12H6a.5.5 0 01-.49-.598c.193-.966.599-1.696 1.364-2.645l.758-.908.066-.081C8.26 7.064 8.5 6.568 8.5 6c0-1.333-2-1.333-2 0a.5.5 0 01-1 0zm-4 6a.5.5 0 01-.09-.992L1.5 11H2V5.706l-.146.148a.5.5 0 01-.765-.638l.057-.07 1-1 .042-.037.062-.042.06-.03.062-.02.054-.012.032-.003L2.512 4c.02 0 .041.002.062.005L2.5 4l.053.003.075.014.063.02.076.04.055.04.032.03.037.041.042.062.03.06.02.062.015.082L3 4.5V11h.5a.5.5 0 01.09.992L3.5 12h-2z",
  }),
);

export default class I123Stroke16Icon {
  render(props) {
    return clone(svg, { props });
  }
}
