import { html } from "@dependable/htm";
import { css, classes } from "stylewars";

const containerStyles = ({ gap, stretched }) => css`
  & {
    display: ${stretched ? "grid" : "inline-grid"};
    ${stretched ? "width: 100%; height: 100%; flex:1;" : ""}
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "top top top"
      "start main end"
      "bottom bottom bottom";
  }

  & > * {
    grid-area: main;
  }

  & > [data-layout="top"] {
    grid-area: top;
  }

  & > [data-layout="start"] {
    grid-area: start;
  }

  & > [data-layout="main"] {
    grid-area: main;
  }

  & > [data-layout="end"] {
    grid-area: end;
  }

  & > [data-layout="bottom"] {
    grid-area: bottom;
  }
`;

export class BorderLayout {
  render({ className, stretched, gap = "0", children, ...other }) {
    return html`
      <div
        className=${classes(containerStyles({ stretched }), className)}
        ...${other}
      >
        ${children}
      </div>
    `;
  }
}
