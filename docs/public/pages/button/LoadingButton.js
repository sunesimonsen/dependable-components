import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";

const startLoading = () => {
  isLoading(true);

  setTimeout(() => {
    isLoading(false);
  }, 3000);
};

const isLoading = observable(false);

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Button} loading=${isLoading()} onClick=${startLoading}>Button<//>
      <//>
    `;
  }
}
