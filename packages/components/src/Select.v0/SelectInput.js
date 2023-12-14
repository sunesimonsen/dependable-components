import { html } from "@dependable/view";
import ChevronDownStroke12Icon from "@dependable/icons/ChevronDownStroke12Icon";
import { ms1 } from "../spacing.v0.js";
import { MediaInput } from "../MediaInput.v0.js";

const inputProps = [
  "id",
  "role",
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

export class SelectInput {
  render({ children, ...other }) {
    const containerProps = filterProps(other, (k) => !isInputProp(k));
    const inputProps = filterProps(other, isInputProp);

    return html`
      <${MediaInput} ...${containerProps}>
        <span data-label>${children}</span>
        <input type="text" ...${inputProps} />
        <${ChevronDownStroke12Icon} className=${ms1} />
      <//>
    `;
  }
}
