import { html } from "@dependable/htm";
import { css } from "stylewars";

import { Title, SubTitle, Heading } from "@dependable/styleguide";

import { Anchor } from "@dependable/components/Anchor/v0";

const robotImage = new URL(
  "../../images/robot.png",
  import.meta.url,
).toString();

const robotStyles = css`
  & {
    width: 100%;
    margin-block: var(--dc-spacing-4);
    border-radius: var(--dc-component-border-radius);
  }
`;

const codeStyles = css`
  & {
    background: var(--dc-color-neutral-97);
    border: thin solid var(--dc-color-neutral-90);
    border-radius: var(--dc-component-border-radius);
    padding: var(--dc-spacing-3);
  }
`;

export default class Page {
  render() {
    return html`
      <${Title}>Dependable components<//>
      <${SubTitle}>
        Lightweight reactive components build with${" "}
        <${Anchor} href="https://github.com/sunesimonsen/dependable-state"
          >@dependable/state<//
        >${" "} and${" "}
        <${Anchor} href="https://github.com/sunesimonsen/dependable-view"
          >@dependable/view<//
        >.
      <//>
      <img
        src=${robotImage}
        className=${robotStyles}
        alt="Robot assembling components"
      />
      <${Heading} level="2">Instalation<//>
      <pre className=${codeStyles}>
        npm install @dependable/state @dependable/view @dependable/components
      </pre
      >
    `;
  }
}
