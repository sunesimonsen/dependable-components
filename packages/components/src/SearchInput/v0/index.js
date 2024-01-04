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
  constructor() {
    const onChange = (value) => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    };

    this.onInput = (e) => {
      onChange(e.target.value);
    };

    this.onClear = () => {
      onChange("");
    };
  }

  renderClear() {
    return (
      this.props.value &&
      html`
        <${XStroke12Icon}
          height="16"
          width="16"
          className=${classes(ms2, clearStyles)}
          onClick=${this.onClear}
        />
      `
    );
  }

  render({ id, value }) {
    return html`
      <${MediaInput}>
        <${SearchStroke16Icon} className=${me2} />
        <input
          id=${id}
          autocomplete="off"
          type="text"
          .value=${value}
          onInput=${this.onInput}
        />
        ${this.renderClear()}
      <//>
    `;
  }
}
