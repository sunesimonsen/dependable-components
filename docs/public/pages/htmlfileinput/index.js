import { html } from "@dependable/htm";
import { Anchor } from "@dependable/components/Anchor/v0";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultHtmlFileInput from "./DefaultHtmlFileInput.js";
import DisabledHtmlFileInput from "./DisabledHtmlFileInput.js";
import Validations from "./Validations.js";

export default class Page {
  render() {
    return html`
      <${Title}>Html file input<//>
      <${SubTitle}>An Input lets users select a file.<//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A basic file input.</p>
      <${Example} src=${new URL("./DefaultHtmlFileInput.js", import.meta.url)}>
        <${DefaultHtmlFileInput} />
      <//>
      <${Heading} level="3"> Disabled<//>
      <p>
        A disabled file input prevents user interaction. It doesn't appear in
        the tab order, can't receive focus, and may not read aloud by a
        screenreader.
      </p>
      <${Example} src=${new URL("./DisabledHtmlFileInput.js", import.meta.url)}>
        <${DisabledHtmlFileInput} />
      <//>
      <${Heading} level="3">Validation<//>
      <p>
        Show success, warning, and danger validation messages with the${" "}
        <${Anchor} href="./validation">Validation<//> component.
      </p>
      <${Example} src=${new URL("./Validations.js", import.meta.url)}>
        <${Validations} />
      <//>
    `;
  }
}
