import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import { theme } from "@dependable/components/default-theme/v0";

import { Colors } from "../../components/Colors.js";
import ExampleForm from "./ExampleForm.js";

export default class Page {
  render() {
    return html`
      <${Title}>Default theme<//>
      <${SubTitle}>
        Theming allows you to change the components colors and spacing.
      <//>
      <${Line} />
      <${Heading} level="3">Colors<//>
      <p>The folowing colors is available as CSS variables.</p>
      <p>You can copy the CSS variable by clicking on the colors.</p>
      <${Colors} className=${theme} />
      <${Heading} level="3">Example form<//>
      <p>Here you can see the theme applied to the components.</p>
      <${Example} src=${new URL("./ExampleForm.js", import.meta.url)}>
        <${ExampleForm} />
      <//>
    `;
  }
}
