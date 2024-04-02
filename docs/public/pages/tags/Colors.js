import { html } from "@dependable/htm";
import { Tag } from "@dependable/components/Tag/v0";
import { Center } from "@dependable/components/Center/v0";

export default class Example {
  render() {
    return html`
      <${Center}>
        <div>
          <${Tag} hue="40">Mars Rover<//>${"\n"}
          <${Tag} hue="190">Starship<//>${"\n"}
          <${Tag} hue="280">Satelite<//>
        </div>
      <//>
    `;
  }
}
