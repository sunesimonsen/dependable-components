import { h } from "@dependable/view";
import FilterStroke12Icon from "@dependable/icons/FilterStroke12Icon";
import { ClearableInput } from "../../ClearableInput/v0";

export class FilterInput {
  render(props) {
    return h(ClearableInput, { Icon: FilterStroke12Icon, ...props });
  }
}
