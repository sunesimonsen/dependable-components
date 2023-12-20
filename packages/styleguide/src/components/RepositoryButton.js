import { html } from "@dependable/view";
import { IconButton } from "@dependable/components/IconButton/v0";
import GithubStroke16Icon from "@dependable/icons/GithubStroke16Icon";

export class RepositoryButton {
  constructor() {
    this.onClick = () => {
      window.open(this.context.repository, "_blank", "noopener");
    };
  }

  render() {
    return html`
      <${IconButton} basic pill onClick=${this.onClick}>
        <${GithubStroke16Icon} width="24" height="24" />
      <//>
    `;
  }
}
