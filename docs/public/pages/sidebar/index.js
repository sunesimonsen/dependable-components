import { html } from "@dependable/view";
import { Anchor } from "@dependable/components/Anchor/v0";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultSidebar from "./DefaultSidebar.js";

export default class Page {
  render() {
    return html`
      <${Title}>Sidebar<//>
      <${SubTitle}>
        The Sidebar is a layout component for grouping other components at the
        sides of a <${Anchor} href="/borderlayout">border layout<//>. When the
        screen gets small the sidebar automatically hides and its visibility can
        be toggled using the <code>SidebarToggle</code>.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The default usage of the sidebar component.</p>
      <${Example}
        src=${new URL("./DefaultSidebar.js", import.meta.url)}
        noPadding
      >
        <${DefaultSidebar} />
      <//>
    `;
  }
}
