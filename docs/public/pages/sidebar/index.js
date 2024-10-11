import { html } from "@dependable/htm";
import { Anchor } from "@dependable/components/Anchor/v0";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultSidebar from "./DefaultSidebar.js";
import Resizable from "./Resizable.js";
import Width from "./Width.js";

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
      <${Heading} level="3">Sidebar width<//>
      <p>
        You can set the width and padding of the sidebar using CSS variables.
      </p>
      <${Example} src=${new URL("./Width.js", import.meta.url)} noPadding>
        <${Width} />
      <//>
      <${Heading} level="3">Resizable<//>
      <p>
        You can make the sidebar resizable and give a minimum and maximum size.
      </p>
      <${Example} src=${new URL("./Resizable.js", import.meta.url)} noPadding>
        <${Resizable} />
      <//>
    `;
  }
}
