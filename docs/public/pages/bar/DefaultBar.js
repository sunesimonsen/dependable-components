import { html } from "@dependable/view";
import { Bar } from "@dependable/components/Bar/v0";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { p4 } from "@dependable/components/spacing/v0";

export default class Example {
  render() {
    return html`
      <${BorderLayout} stretched style="height: 400px">
        <${Bar} data-layout="top" className=${p4}>Top<//>
        <${Bar} data-layout="start" className=${p4}>Start<//>
        <${Bar} data-layout="end" className=${p4}>End<//>
        <${Bar} data-layout="bottom" className=${p4}>Bottom<//>
      <//>
    `;
  }
}
