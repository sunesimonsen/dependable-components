import { html } from "@dependable/view";
import { Tag } from "@dependable/components/Tag/v0";
import { Center } from "@dependable/components/Center/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <div><${Tag}>Asteroids<//> <${Tag}>Solar Flare<//></div>
      <//>
    `;
  }
}
