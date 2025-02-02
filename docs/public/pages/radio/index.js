import { html } from "@dependable/htm";

import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultRadio from "./DefaultRadio.js";
import Disabled from "./Disabled.js";

export default class Page {
  render() {
    return html`
      <${Title}>Radio<//>
      <${SubTitle}>
        Radio buttons let users choose a single option among two or more
        mutually exclusive options.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A Radio’s label is part of its touch target.</p>
      <${Example} src=${new URL("./DefaultRadio.js", import.meta.url)}>
        <${DefaultRadio} />
      <//>
      <${Heading} level="3">Disabled<//>
      <p>
        A disabled Radio prevents user interaction. It doesn’t appear in the tab
        order, can’t receive focus, and may not be read aloud by a screenreader.
      </p>
      <${Example} src=${new URL("./Disabled.js", import.meta.url)}>
        <${Disabled} />
      <//>
    `;
  }
}
