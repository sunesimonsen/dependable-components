import { html } from "@dependable/view";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { css } from "stylewars";

const iconStyles = css`
  & {
    font-size: 64px;
  }
`;

const isDay = observable(false);

const toggleDay = () => {
  isDay(!isDay());
};

class DaylightIcon {
  render() {
    const icon = isDay() ? "🌔" : "🌘";
    return html`<span className=${iconStyles}>${icon}</span>`;
  }
}

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="2">
          <${Button} basic aria-pressed=${String(isDay())} onClick=${toggleDay}>
            Day
          <//>
          <${DaylightIcon} />
        <//>
      <//>
    `;
  }
}
