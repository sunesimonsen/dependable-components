import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";
import { Switch } from "@dependable/components/Switch/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Switch} id="switch-disabled" disabled />
      <//>
    `;
  }
}
