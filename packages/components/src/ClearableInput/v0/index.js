import { html } from "@dependable/view";
import { css, classes } from "stylewars";
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

const inputProps = [
  "id",
  "role",
  "onFocus",
  "onBlur",
  "value",
  ".value",
  "disabled",
  ".disabled",
];

const isInputProp = (name) =>
  name.startsWith("aria-") || inputProps.includes(name);

const filterProps = (props, predicate) =>
  Object.fromEntries(Object.entries(props).filter(([key]) => predicate(key)));

export class ClearableInput {
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

  render({ onClear, Icon, ...other }) {
    const containerProps = filterProps(other, (k) => !isInputProp(k));
    const inputProps = filterProps(other, isInputProp);

    const icon = Icon && html`<${Icon} className=${me2} />`;

    return html`
      <${MediaInput} ...${containerProps}>
        ${icon}
        <input autocomplete="off" type="text" ...${inputProps} />
        ${this.renderClear({ onClear })}
      <//>
    `;
  }
}
