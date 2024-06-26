import { html } from "@dependable/htm";
import { Anchor } from "@dependable/components/Anchor/v0";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultBar from "./DefaultBar.js";
import Colors from "./Colors.js";
import Layout from "./Layout.js";

export default class Page {
  render() {
    return html`
      <${Title}>Bar<//>
      <${SubTitle}>
        The Bar is a layout component for grouping other components at the edges
        of a <${Anchor} href="/borderlayout">border layout<//>.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>Assigning areas using layout attributes.</p>
      <${Example} src=${new URL("./DefaultBar.js", import.meta.url)} noPadding>
        <${DefaultBar} />
      <//>
      <${Heading} level="3">Colors<//>
      <p>You can easily override the colors of the bar using CSS.</p>
      <${Example} src=${new URL("./Colors.js", import.meta.url)} noPadding>
        <${Colors} />
      <//>
      <${Heading} level="3">Layout<//>
      <p>You can use layout components to arrange items inside for the bar.</p>
      <${Example} src=${new URL("./Layout.js", import.meta.url)} noPadding>
        <${Layout} />
      <//>
    `;
  }
}
