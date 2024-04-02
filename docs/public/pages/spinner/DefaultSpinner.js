import { html } from "@dependable/htm";
import { Spinner } from "@dependable/components/Spinner/v0";
import { Center } from "@dependable/components/Center/v0";

export default class Example {
  render() {
    return html`<${Center}><${Spinner} /><//>`;
  }
}
