import { html } from "@dependable/htm";
import { observable } from "@dependable/state";

const defaultFallback = html`<h2>Crashed</h2>`;

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
