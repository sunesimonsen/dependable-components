import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultTheme from "./DefaultTheme.js";

class ButtonPage {
  render() {
    return html`
      <${Title}>Theming<//>
      <${SubTitle}>
        Theming allows you to change the components colors and spacing.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default theme<//>
      <p>The folowing variables is available.</p>
      <${Example} src=${new URL("./DefaultTheme.js", import.meta.url)}>
        <${DefaultTheme} />
      <//>
    `;
  }
}

export default ButtonPage;
