import { observable } from "@dependable/state";

export class ErrorBoundary {
  constructor({ name }) {
    this.failed = observable(null);
    this.didCatch = (e) => {
      if (this.props.onError) {
        this.props.onError(name, e);
      }
      this.failed(e);
    };
  }

  render({ children, fallback }) {
    return this.failed() ? fallback : children;
  }
}
