import { html } from "@dependable/htm";
import { Suspense, lazy } from "@dependable/components/Suspense/v0";
import { Center } from "@dependable/components/Center/v0";
import { ErrorBoundary } from "@dependable/components/ErrorBoundary/v0";

const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const LazyFailure = lazy(async () => {
  await delay(1000);
  throw new Error("Lazy loading failed");
});

const loadingScreen = html`<p>Loading...</p>`;

const errorScreen = html`<p>Failed loading component :-/</p>`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ErrorBoundary} fallback=${errorScreen}>
          <${Suspense} fallback=${loadingScreen}>
            <${LazyFailure} />
          <//>
        <//>
      </${Center}>
    `;
  }
}
