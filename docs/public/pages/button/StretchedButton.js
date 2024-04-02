import { html } from "@dependable/htm";
import { Button } from "@dependable/components/Button/v0";

export default class Example {
  render() {
    return html`<${Button} stretched>Button<//>`;
  }
}
