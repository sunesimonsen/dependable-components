import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import { css } from "stylewars";
import { Anchor } from "@dependable/components/Anchor/v0";
import IconUsage from "./IconUsage.js";
import IconColors from "./IconColors.js";

class IconsPage {
  render() {
    return html`
      <${Title}>Icons<//>
      <${SubTitle}>
        ${"These icon components is extracted from "}
        <${Anchor} href="https://garden.zendesk.com/design/icons/installation">
          Zendesk Garden
        <//>
        ${" and turned into components."}
      <//>
      <${Line} />
      <${Heading} level="2">Usage<//>
      <p>
        The icons come in two flavors – monochrome and two-tone. The primary
        fill/stroke will always be specified as
        <code className="inline">currentColor</code> This means CSS text color
        style will cascade to the icon. Two-tone icons can receive a secondary
        color via the <code className="inline">fill</code> style property.
      </p>
      <${Example} src=${new URL("./IconUsage.js", import.meta.url)}>
        <${IconUsage} />
      <//>
      <p>
        Icons that users two-tones is displayed with gray and black. You can
        control the colors the following way.
      </p>
      <${Example} src=${new URL("./IconColors.js", import.meta.url)}>
        <${IconColors} />
      <//>
    `;
  }
}

export default IconsPage;
