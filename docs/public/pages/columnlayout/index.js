import { html } from "@dependable/htm";
import { Anchor } from "@dependable/components/Anchor/v0";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultColumnLayout from "./DefaultColumnLayout.js";
import NumberOfColumns from "./NumberOfColumns.js";
import ColumnTemplate from "./ColumnTemplate.js";
import AlignItems from "./AlignItems.js";
import JustifyItems from "./JustifyItems.js";
import Gap from "./Gap.js";
import Stretched from "./Stretched.js";

export default class Page {
  render() {
    return html`
      <${Title}>Column layout<//>
      <${SubTitle}>A simple grid based column layout.<//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        The column layout uses one column by default with a gap of${"\n"}
        <code>1em</code>.
      </p>
      <${Example} src=${new URL("./DefaultColumnLayout.js", import.meta.url)}>
        <${DefaultColumnLayout} />
      <//>
      <${Heading} level="3">Columns<//>
      <p>
        The number of columns can be specified using the${"\n"}
        <code>columns</code> property.
      </p>
      <${Example} src=${new URL("./NumberOfColumns.js", import.meta.url)}>
        <${NumberOfColumns} />
      <//>
      <p>
        If you need more control over the columns, you can specify
        <${Anchor}
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
          target="_blank"
        >
          grid-template-columns
        <//>
        .
      </p>
      <${Example} src=${new URL("./ColumnTemplate.js", import.meta.url)}>
        <${ColumnTemplate} />
      <//>
      <${Heading} level="3">Gap<//>
      <p>
        Control the gap between the children with the${"\n"}
        <code>gap</code> property.
      </p>
      <${Example} src=${new URL("./Gap.js", import.meta.url)}>
        <${Gap} />
      <//>
      <${Heading} level="3">Align items<//>
      <p>
        You can control <code>align-items</code> using
        the${"\n"}<code>alignItems</code>${"\n"}property. The default value is
        <code>center</code>.
      </p>
      <${Example} src=${new URL("./AlignItems.js", import.meta.url)}>
        <${AlignItems} />
      <//>
      <${Heading} level="3">Justify items<//>
      <p>
        You can control
        <code>justify-items</code> using the${"\n"}
        <code>justifyItems</code> property. The default value is${"\n"}
        <code>center</code>.
      </p>
      <${Example} src=${new URL("./JustifyItems.js", import.meta.url)}>
        <${JustifyItems} />
      <//>
      <${Heading} level="3">Stretched<//>
      <p>The column layout can stretch to fill the width of their container.</p>
      <${Example} src=${new URL("./Stretched.js", import.meta.url)}>
        <${Stretched} />
      <//>
    `;
  }
}
