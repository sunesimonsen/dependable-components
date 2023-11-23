import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";

export default class Example {
  constructor() {
    this.sayHello = () => {
      alert("Hello");
    };
  }

  render() {
    return html`
      <${Center}><${Button} onClick=${this.sayHello} disabled>Button<//><//>
    `;
  }
}
