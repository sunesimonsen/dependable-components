import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultValidation from "./DefaultValidation.js";
import Types from "./Types.js";

export default class Page {
  render() {
    return html`
      <${Title}>Tags<//>
      <${SubTitle}>
        Error hints let's users show an error near a component with a incorrect
        value.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of a Validation component.</p>
      <${Example} src=${new URL("./DefaultValidation.js", import.meta.url)}>
        <${DefaultValidation} />
      <//>
      <${Heading} level="3">Type<//>
      <p>There are 3 types of validations: info, success, warning and error.</p>
      <${Example} src=${new URL("./Types.js", import.meta.url)}>
        <${Types} />
      <//>
    `;
  }
}
