import { html } from "@dependable/htm";

import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultCheckbox from "./DefaultCheckbox.js";
import Disabled from "./Disabled.js";
import Indeterminate from "./Indeterminate.js";

export default class Page {
  render() {
    return html`
      <${Title}>Checkbox<//>
      <${SubTitle}>
        A Checkbox lets users select and unselect options from a list.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A Checkbox’s label is part of its touch target.</p>
      <${Example} src=${new URL("./DefaultCheckbox.js", import.meta.url)}>
        <${DefaultCheckbox} />
      <//>
      <${Heading} level="3">Indeterminate<//>
      <p>
        If the children of a Checkbox have different states (some on, some off)
        the parent Checkbox will show an indeterminate state.
      </p>
      <${Example} src=${new URL("./Indeterminate.js", import.meta.url)}>
        <${Indeterminate} />
      <//>
      <${Heading} level="3">Disabled<//>
      <p>
        A disabled Checkbox prevents user interaction. It doesn’t appear in the
        tab order, can’t receive focus, and may not be read aloud by a
        screenreader.
      </p>
      <${Example} src=${new URL("./Disabled.js", import.meta.url)}>
        <${Disabled} />
      <//>
    `;
  }
}
