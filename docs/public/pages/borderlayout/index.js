import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultBorderLayout from "./DefaultBorderLayout.js";
import CSSAreas from "./CSSAreas.js";
import Stretched from "./Stretched.js";
import OmitAreas from "./OmitAreas.js";
import Nesting from "./Nesting.js";

export default class Page {
  render() {
    return html`
      <${Title}>BorderLayout<//>
      <${SubTitle}>
        The BorderLayout arranges the components to fit in the five ares: top,
        start, end, bottom, and main. Each area can contain only one component.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>Assigning areas using layout attributes.</p>
      <${Example} src=${new URL("./DefaultBorderLayout.js", import.meta.url)}>
        <${DefaultBorderLayout} />
      <//>
      <${Heading} level="3">CSS<//>
      <p>Assigning areas using CSS.</p>
      <${Example} src=${new URL("./CSSAreas.js", import.meta.url)}>
        <${CSSAreas} />
      <//>
      <${Heading} level="3">Stretched<//>
      <p>The layout can stretch to fill the surrouding container.</p>
      <${Example} src=${new URL("./Stretched.js", import.meta.url)}>
        <${Stretched} />
      <//>
      <${Heading} level="3">Omiting areas<//>
      <p>Omit areas to produce different layouts.</p>
      <${Example} src=${new URL("./OmitAreas.js", import.meta.url)}>
        <${OmitAreas} />
      <//>
      <${Heading} level="3">Nesting<//>
      <p>The layout can be nested arbitrarily.</p>
      <${Example} src=${new URL("./Nesting.js", import.meta.url)}>
        <${Nesting} />
      <//>
    `;
  }
}
