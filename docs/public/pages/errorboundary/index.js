import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import Crashing from "./Crashing.js";

export default class Page {
  render() {
    return html`
      <${Title}>ErrorBoundary<//>
      <${SubTitle}>
        An error boundary renders a fallback if any of its children throws an
        error.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <p>
        Here the child component crashes on mount and the error boundary
        displays the fallback and calls the <code>onError</code> callback if it
        is provided.
      </p>
      <${Example} src=${new URL("./Crashing.js", import.meta.url)}>
        <${Crashing} />
      <//>
    `;
  }
}
