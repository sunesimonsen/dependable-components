import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultSelect from "./DefaultSelect.js";
import Disabled from "./Disabled.js";

class AnchorPage {
  render() {
    return html`
      <${Title}>Select<//>
      <${SubTitle}>
        Select allows a user to pick one option from a list. This helps simplify
        the UI when space is limited.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        Works in combination with a SelectInput to display a list of options.
      </p>
      <${Example} src=${new URL("./DefaultSelect.js", import.meta.url)}>
        <${DefaultSelect} />
      <//>
      <${Heading} level="3">Disabled<//>
      <p>
        A disabled Select prevents user interaction. It doesn’t appear in the
        tab order, can’t receive focus, and may not read aloud by a
        screenreader.
      </p>
      <${Example} src=${new URL("./Disabled.js", import.meta.url)}>
        <${Disabled} />
      <//>
    `;
  }
}

export default AnchorPage;
