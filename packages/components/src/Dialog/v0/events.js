export class DialogCloseEvent extends CustomEvent {
  constructor(detail) {
    super("DialogClose", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}
