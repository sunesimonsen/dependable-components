import { html } from "@dependable/view";
import { Center } from "@dependable/components/Center/v0";

export default class Example {
  render() {
    return html`
      <${Center} style=${{ height: "150px" }}>
        <div>Center of the universe</div>
      <//>
    `;
  }
}
