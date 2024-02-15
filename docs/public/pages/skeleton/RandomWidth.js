import { html } from "@dependable/view";
import { Skeleton } from "@dependable/components/Skeleton/v0";

export default class Example {
  render() {
    return html`
      <section>
        <h1><${Skeleton} from="50" /></h1>
        <p>
          <${Skeleton} from="50" to="80" />
          <${Skeleton} from="70" />
          <${Skeleton} from="70" />
          <${Skeleton} from="70" />
          <${Skeleton} from="50" to="80" />
          <${Skeleton} from="70" />
          <${Skeleton} from="70" />
        </p>
      </section>
    `;
  }
}
