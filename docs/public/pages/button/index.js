import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultButton from "./DefaultButton.js";

export default class ButtonPage {
  render() {
    return html`
      <${Title}>Button<//>
      <${SubTitle}>
        Buttons let users take action quickly. Use a Button to enable actions or
        decisions that are important to a user's workflow.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of a Button component.</p>
      <${Example} src=${new URL("./DefaultButton.js", import.meta.url)}>
        <${DefaultButton} />
      <//>
    `;
  }
}
