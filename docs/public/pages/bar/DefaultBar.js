import { html } from "@dependable/view";
import { Bar } from "@dependable/components/Bar/v0";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { padding } from "@dependable/components/theming/v0";

export default class Example {
  render() {
    return html`
      <${BorderLayout} stretched style="height: 400px">
        <${Bar} data-layout="top" className=${padding(4)}>Top<//>
        <${Bar} data-layout="start" className=${padding(4)}>Start<//>
        <${Bar} data-layout="end" className=${padding(4)}>End<//>
        <${Bar} data-layout="bottom" className=${padding(4)}>Bottom<//>
      <//>
    `;
  }
}
