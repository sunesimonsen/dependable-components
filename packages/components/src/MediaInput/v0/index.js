import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import { textInputStyles } from "../../TextInput/v0/index.js";

const mediaInputStyles = css`
  & {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  & > [data-label],
  & > input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    color: var(--dc-color-foreground);
  }

  & > [data-label] + input {
    position: absolute;
    top: 0;
    left: 0;
    border: 0px;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
  }

  & > input:disabled {
    color: var(--dc-color-neutral-70);
  }
`;

const combineRefs =
  (...refs) =>
  (node) =>
    refs.forEach((ref) => ref && ref(node));

export class MediaInput {
  constructor() {
    this.focusInput = (e) => {
      if (this.inputRef && this.inputRef !== e.target) {
        e.preventDefault();
        this.inputRef.focus();
      }
    };

    this.onBlur = (e) => {
      const blurHandler = this.props.onBlur;
      blurHandler && blurHandler(e);
    };

    this.setRef = (ref) => {
      this.ref = ref;
    };
  }

  didMount() {
    this.inputRef = this.ref.querySelector("input");

    if (this.inputRef) {
      this.inputRef.addEventListener("blur", this.onBlur);
    }
  }

  willUnmount() {
    if (this.inputRef) {
      this.inputRef.removeEventListener("blur", this.onBlur);
    }
  }

  render({ ref, className, children, ...other }) {
    const input = children.filter(Boolean).find(({ type }) => type === "input");
    const disabled = input.props[".disabled"] || input.props.disabled;

    return h(
      "span",
      {
        ref: combineRefs(this.setRef, ref),
        className: classes(className, mediaInputStyles, textInputStyles),
        disabled,
        onMouseDown: this.focusInput,
        ...other,
      },
      children,
    );
  }
}
