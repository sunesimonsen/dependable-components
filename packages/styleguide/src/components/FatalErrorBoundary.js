import { h } from "@dependable/view";
import { observable } from "@dependable/state";
import { ErrorBoundary } from "@dependable/components/ErrorBoundary/v0";
import { Center } from "@dependable/components/Center/v0";

const fallback = h(Center, { stretched: true }, h("p", {}, "Crashed :-/"));

export class FatalErrorBoundary {
  constructor() {
    this.failed = observable(null);
    this.onError = (name, e) => {
      console.error(name, e);
      this.failed(e);
    };
  }

  render({ name, children }) {
    return h(
      ErrorBoundary,
      { name, fallback, onError: this.onError },
      children,
    );
  }
}
