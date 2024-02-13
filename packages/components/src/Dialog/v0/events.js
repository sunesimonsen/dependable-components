export class DialogCloseEvent extends CustomEvent {
  constructor(detail) {
    super("DialogClose", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}

export class DialogSubmitEvent extends CustomEvent {
  constructor(detail) {
    super("DialogSubmit", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}
