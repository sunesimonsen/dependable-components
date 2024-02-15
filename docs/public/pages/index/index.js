import { html } from "@dependable/view";

import { Title, SubTitle, Line, Heading } from "@dependable/styleguide";

import { Anchor } from "@dependable/components/Anchor/v0";

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
      <${Line} />
      <${Heading} level="2">Instalation<//>
      <pre>
        npm install @dependable/state @dependable/view @dependable/components
      </pre
      >
    `;
  }
}
