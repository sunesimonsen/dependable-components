import { h } from "@dependable/view";
import { observable } from "@dependable/state";

export class Suspense {
  constructor() {
    this.suspended = observable(0);
  }

  render({ fallback, children }) {
    if (this.suspended() > 0) return fallback;

    return h("Context", { suspended: this.suspended }, children);
  }
}
