import { html } from "@dependable/view";

import {
  Title,
  SubTitle,
  Heading,
  Line,
  Example,
} from "@dependable/styleguide";

import DefaultCenter from "./DefaultCenter.js";
import Stretched from "./Stretched.js";

export default class Page {
  render() {
    return html`
      <${Title}>Center<//>
      <${SubTitle}>Centering its children using CSS flex layout.<//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <${Example} src=${new URL("./DefaultCenter.js", import.meta.url)}>
        <${DefaultCenter} />
      <//>
      <${Heading} level="3">Stretched<//>
      <p>The center layout can stretch to fill the surrouding container.</p>
      <${Example} src=${new URL("./Stretched.js", import.meta.url)}>
        <${Stretched} />
      <//>
    `;
  }
}
