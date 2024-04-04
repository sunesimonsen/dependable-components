export class DirectionChangedEvent extends CustomEvent {
  constructor(detail) {
    super("DirecionChanged", {
      detail,
      bubbles: true,
      cancelable: true,
    });
  }
}
