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
    d: "M4.954.433a1.479 1.479 0 011.98-.101l.112.101.89.89 1.26.001a1.48 1.48 0 011.453 1.198l.02.138.007.143-.002 1.259.893.892a1.48 1.48 0 01.19 1.86l-.089.12-.101.112-.893.891.001 1.258c0 .659-.432 1.224-1.056 1.415l-.136.035-.142.023-.144.007h-1.26l-.891.892a1.48 1.48 0 01-1.86.19l-.12-.089-.112-.101-.892-.893-1.258.001A1.478 1.478 0 011.35 9.48l-.02-.139-.006-.142V7.936l-.89-.89a1.48 1.48 0 01-.19-1.86l.088-.12.101-.112.89-.891.001-1.26c0-.72.516-1.32 1.198-1.452l.139-.02.142-.007h1.26l.891-.89zm1.394.711a.492.492 0 00-.618-.063l-.078.063L4.476 2.32H2.812a.492.492 0 00-.484.404l-.008.088v1.664L1.144 5.652a.492.492 0 00-.063.618l.063.078L2.32 7.524v1.674l.008.078a.492.492 0 00.312.372l.083.023.089.008 1.662-.001 1.178 1.178a.492.492 0 00.618.063l.078-.063 1.178-1.178h1.633l.087-.002a.492.492 0 00.407-.33l.02-.077.006-.082-.001-1.661 1.178-1.178a.492.492 0 00.063-.618l-.063-.078-1.178-1.178V2.812a.49.49 0 00-.402-.484l-.088-.008H7.524L6.348 1.144zm2.256 3.002a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L5.25 6.793l2.646-2.647a.5.5 0 01.708 0z",
  }),
);

export default class CheckBadgeStroke12Icon {
  render(props) {
    return clone(svg, { props });
  }
}
