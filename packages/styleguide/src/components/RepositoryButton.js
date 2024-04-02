import { h } from "@dependable/view";
import { IconButton } from "@dependable/components/IconButton/v0";
import GithubStroke16Icon from "@dependable/icons/GithubStroke16Icon";

export class RepositoryButton {
  constructor() {
    this.onClick = () => {
      window.open(this.context.repository, "_blank", "noopener");
    };
  }

  render() {
    return h(
      IconButton,
      { basic: true, pill: true, onClick: this.onClick },
      h(GithubStroke16Icon, { width: "24", height: "24" }),
    );
  }
}
