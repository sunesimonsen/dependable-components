import { h } from "@dependable/view";
import { html } from "@dependable/htm";
import { Center } from "@dependable/components/Center/v0";
import { ErrorBoundary } from "@dependable/components/ErrorBoundary/v0";

class Failing {
  didMount() {
    throw new Error("Example failure");
  }

  render() {
    return h("p", {}, "I'll failed when I'm mounted");
  }
}

const fallback = html`<p>Failed :-/</p>`;

export default class Example {
  constructor() {
    this.onError = (name, err) => {
      console.log(name, err);
    };
  }

  render() {
    return html`
      <${Center}>
        <${ErrorBoundary} name="example" onError=${this.onError} fallback=${fallback}>
          <${Failing} />
        <//>
      </${Center}>
    `;
  }
}
