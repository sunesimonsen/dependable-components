import { html } from "@dependable/htm";
import { Anchor } from "@dependable/components/Anchor/v0";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultToolbarLayout from "./DefaultToolbarLayout.js";
import Layouts from "./Layouts.js";

export default class Page {
  render() {
    return html`
      <${Title}>ToolbarLayout<//>
      <${SubTitle}>
        The toolbar layout allows arranging toolbar items horizontal with gaps
        between them.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        The default toolbar layout displays children aligned to the start with
        gaps between them.
      </p>
      <${Example} src=${new URL("./DefaultToolbarLayout.js", import.meta.url)}>
        <${DefaultToolbarLayout} />
      <//>
      <${Heading} level="3">Layouts<//>
      <p>
        The layout allows dividing the toolbars into three sections, using
        the${"\n"}
        <code>sections</code> property. The <code>sections</code> can contain
        the following configurations: <code>start</code>,${"\n"}
        <code>end</code>,${"\n"}<code>start end</code>,${"\n"}
        <code>start center</code>
      </p>
      <${Example} src=${new URL("./Layouts.js", import.meta.url)}>
        <${Layouts} />
      <//>
    `;
  }
}
