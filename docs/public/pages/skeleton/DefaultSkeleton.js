import { html } from "@dependable/view";
import { Skeleton } from "@dependable/components/Skeleton/v0";

export default class Example {
  render() {
    return html`
      <section>
        <h1><${Skeleton} /></h1>
        <p>
          <${Skeleton} />
          <${Skeleton} />
          <${Skeleton} />
        </p>
      </section>
    `;
  }
}
