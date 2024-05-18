import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import LazyLoading from "./LazyLoading.js";
import Nesting from "./Nesting.js";
import FailLazyLoading from "./FailLazyLoading.js";

export default class Page {
  render() {
    return html`
      <${Title}>Suspense<//>
      <${SubTitle}>
        A suspense boundary lets you display a fallback until its children have
        finished loading.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Lazy loading a component<//>
      <p>
        This example shows two icons being lazy loaded. An artificial delay have
        been added to show the effect more clearly. As soon as one of the lazy
        loaded components gets mounted, the suspend boundary gets notified to
        render the fallback component until the component is fully loaded or
        fails.
      </p>
      <${Example} src=${new URL("./LazyLoading.js", import.meta.url)}>
        <${LazyLoading} />
      <//>
      <${Heading} level="3">Nested loading states<//>
      <p>This example shows how you can nested suspense boundaries.</p>
      <p>
        First the Boxes component is loaded with one loading fallback. When the
        component is done loading 8 lazy loaded boxes with separate suspense
        boundaries is rendered.
      </p>
      <${Example} src=${new URL("./Nesting.js", import.meta.url)}>
        <${Nesting} />
      <//>
      <${Heading} level="3">Failing to load a component lazily<//>
      <p>
        Here we use an error boundary to render an error when the lazy loaded
        component fails.
      </p>
      <${Example} src=${new URL("./LazyLoading.js", import.meta.url)}>
        <${FailLazyLoading} />
      <//>
    `;
  }
}
