import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";

import DefaultAutocomplete from "./DefaultAutocomplete.js";
import Placement from "./Placement.js";

export default class Page {
  render() {
    return html`
      <${Title}>Autocomplete<//>
      <${SubTitle}>
        Autocomplete is an input field that filters results as users type. This
        helps users find something quickly in a large list of options.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of an Autocomplete component.</p>
      <${Example} src=${new URL("./DefaultAutocomplete.js", import.meta.url)}>
        <${DefaultAutocomplete} />
      <//>
      <${Heading} level="2">Placement<//>
      <p>
        Menu placement can be oriented around a trigger element in different
        positions. The default placement is${" "}
        <code className="inline">bottom-stretch</code>. This example
        demonstrates the <code className="inline">top-stretch</code> placement.
      </p>
      <p>
        See the other placements on the${" "}
        <${Anchor} href="/popup#placement">popup<//> page.
      </p>
      <${Example} src=${new URL("./Placement.js", import.meta.url)}>
        <${Placement} />
      <//>
    `;
  }
}
