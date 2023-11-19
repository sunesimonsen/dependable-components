import { html } from "@dependable/view";
import { Button } from "@dependable/components/Button/v0";

export default class Example {
  constructor() {
    this.sayHello = () => {
      alert("Hello");
    };
  }

  render() {
    return html`<${Button} onClick=${this.sayHello}>Button<//>`;
  }
}
