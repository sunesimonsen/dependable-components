import { html } from "@dependable/view";
import { css } from "stylewars";
import { transparentColor } from "@dependable/components/theming/v0";

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

    this.onClick = (e) => {
      const dialogDimensions = this.ref.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        this.props.onClose(e);
      }
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
    disableBackdrop,
    width = "576px",
    height = "fit-content",
    children,
  }) {
    return html`
      <dialog
        ref=${this.setRef}
        onClick=${!disableBackdrop && this.props.onClose && this.onClick}
        onDialogClose=${this.props.onClose}
        onDialogSubmit=${this.props.onSubmit}
        onKeydown=${this.onKeydown}
        className=${styles({ width, height })}
      >
        ${children}
      </dialog>
    `;
  }
}
