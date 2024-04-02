import { h } from "@dependable/view";
import SearchStroke16Icon from "@dependable/icons/SearchStroke16Icon";
import { ClearableInput } from "../../ClearableInput/v0";

export class SearchInput {
  render(props) {
    return h(ClearableInput, { Icon: SearchStroke16Icon, ...props });
  }
}
