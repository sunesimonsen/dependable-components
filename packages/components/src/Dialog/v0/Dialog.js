import { html } from "@dependable/view";
import { css } from "stylewars";

const styles = ({ width, height }) => css`
  & {
    position: relative;
    padding: 0;
    width: ${width};
    height: ${height};

    border: none;
    border-radius: 4px;
    box-shadow: rgba(47, 57, 65, 0.35) 0px 20px 28px 0px;
    background-color: rgb(255, 255, 255);
  }

  &::backdrop {
    background-color: rgba(47, 57, 65, 0.35);
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
        this.props.onClose();
      }
    };
  }

  didMount() {
    this.ref.showModal();
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
        className=${styles({ width, height })}
      >
        ${children}
      </dialog>
    `;
  }
}
