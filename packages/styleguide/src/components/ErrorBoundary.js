import { h } from "@dependable/view";
import { observable } from "@dependable/state";

const defaultFallback = h("h2", {}, "Crashed");

export class ErrorBoundary {
  constructor({ name }) {
    this.failed = observable(null);
    this.didCatch = (e) => {
      console.error(e);
      this.failed(e);
    };
  }

  render({ children, fallback = defaultFallback }) {
    return this.failed() ? fallback : children;
  }
}
