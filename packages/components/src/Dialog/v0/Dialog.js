import { h } from "@dependable/view";
import { css } from "stylewars";

const styles = ({ width, height }) => css`
  & {
    position: relative;
    padding: 0;
    width: ${width};
    height: ${height};

    border: 1px solid var(--dc-color-neutral-90);
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 28px 0px;
    background-color: var(--dc-color-background);
    color: var(--dc-color-foreground);
    outline: none;
    overflow: visible;
  }

  &::backdrop {
    background-color: rgba(47, 57, 65, 0.35);
  }

  @media (prefers-color-scheme: dark) {
    &::backdrop {
      background-color: rgba(255, 255, 255, 0.35);
    }
  }
`;

export class Dialog {
  constructor() {
    this.setRef = (ref) => {
      this.ref = ref;
    };
    this.onKeydown = (e) => {
      if (e.key === "Escape") {
        this.props.onClose?.(e);
      } else if (e.key === "Enter" && e.ctrlKey | e.metaKey) {
        this.props.onSubmit?.(e);
        e.preventDefault();
      }
    };
  }

  didMount() {
    this.ref.showModal();
    this.ref.focus();
  }

  render({
    onClose,
    onSubmit,
    width = "576px",
    height = "fit-content",
    children,
  }) {
    return h(
      "dialog",
      {
        ref: this.setRef,
        onDialogClose: onClose,
        onDialogSubmit: onSubmit,
        onKeydown: this.onKeydown,
        className: styles({
          width,
          height,
        }),
      },
      children,
    );
  }
}
