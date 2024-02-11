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
    animation: &(slide-in) 100ms ease-out;
  }

  &::backdrop {
    background-color: rgba(47, 57, 65, 0);
    transition: background-color 75ms ease-in;
  }

  &.open::backdrop {
    background-color: rgba(47, 57, 65, 0.35);
  }

  @keyframes &(slide-in) {
    0% {
      opacity: 0.7;
      transform: translateY(-10px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
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
        this.props.onClose();
      }
    };
  }

  didMount() {
    this.ref.showModal();
    this.ref.classList.add("open");
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
