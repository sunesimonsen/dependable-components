import { html } from "@dependable/htm";
import FilterStroke12Icon from "@dependable/icons/FilterStroke12Icon";
import { ClearableInput } from "../../ClearableInput/v0";

export class FilterInput {
  render(props) {
    return html`<${ClearableInput} Icon=${FilterStroke12Icon} ...${props} />`;
  }
}
