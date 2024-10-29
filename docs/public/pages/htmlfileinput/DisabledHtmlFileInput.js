import { html } from "@dependable/htm";
import { Center } from "@dependable/components/Center/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { HtmlFileInput } from "@dependable/components/HtmlFileInput/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} justifyItems="start">
          <${FieldLayout} width="400px">
            <label for="disabled-planet-picture">Planet picture</label>
            <${HtmlFileInput}
              id="disabled-planet-picture"
              disabled
            />
          <//>
        <//>
      </${Center}>
    `;
  }
}
