import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import XStroke12Icon from "@dependable/icons/XStroke12Icon";
import { MediaInput } from "../../MediaInput/v0";
import { margin } from "../../theming/v0";

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
  ".disabled",
  ".value",
  "autofocus",
  "disabled",
  "id",
  "onInput",
  "onBlur",
  "onFocus",
  "placeholder",
  "role",
  "value",
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
      h(XStroke12Icon, {
        height: "16",
        width: "16",
        className: classes(margin(2, "inline-start"), clearStyles),
        onClick: onClear,
      })
    );
  }

  render({ onClear, Icon, ...other }) {
    const containerProps = filterProps(other, (k) => !isInputProp(k));
    const inputProps = filterProps(other, isInputProp);

    const icon =
      Icon &&
      h(Icon, {
        className: margin(2, "inline-end"),
      });

    return h(
      MediaInput,
      containerProps,
      icon,
      h("input", { autocomplete: "off", type: "text", ...inputProps }),
      this.renderClear({ onClear }),
    );
  }
}
