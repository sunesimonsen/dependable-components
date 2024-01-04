import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import SearchStroke16Icon from "@dependable/icons/SearchStroke16Icon";
import XStroke12Icon from "@dependable/icons/XStroke12Icon";
import { MediaInput } from "../../MediaInput/v0";
import { ms2, me2 } from "../../spacing/v0";

const clearStyles = css`
  & {
    padding: 3px;
    margin: -2px;
    border-radius: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;

export class SearchInput {
  renderClear({ onClear }) {
    return (
      this.props[".value"] &&
      onClear &&
      html`
        <${XStroke12Icon}
          height="16"
          width="16"
          className=${classes(ms2, clearStyles)}
          onClick=${onClear}
        />
      `
    );
  }

  render({ onClear, ...other }) {
    return html`
      <${MediaInput}>
        <${SearchStroke16Icon} className=${me2} />
        <input autocomplete="off" type="text" ...${other} />
        ${this.renderClear({ onClear })}
      <//>
    `;
  }
}
