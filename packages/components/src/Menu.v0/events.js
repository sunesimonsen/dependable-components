export class SelectItemEvent extends CustomEvent {
  constructor(detail) {
    super("SelectItem", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}

export class FocusItemEvent extends CustomEvent {
  constructor(detail) {
    super("FocusItem", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}
