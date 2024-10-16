import { html } from "@dependable/htm";
import { Title, SubTitle, Line, Heading } from "@dependable/styleguide";

import { Colors } from "./Colors.js";
import { ExampleForm } from "./ExampleForm.js";

export class ThemePreview {
  render({ theme }) {
    return html`
      <${Title}>${theme.name} theme<//>
      <${SubTitle}>
        Theming allows you to change the components colors and spacing.
      <//>
      <${Line} />
      <${Heading} level="3">Colors<//>
      <p>The folowing colors is available as CSS variables.</p>
      <p>You can copy the CSS variable by clicking on the colors.</p>
      <${Colors} theme=${theme} />
      <${Heading} level="3">Example form<//>
      <p>Here you can see the theme applied to the components.</p>
      <${ExampleForm} theme=${theme} />
    `;
  }
}
