import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { css } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { Switch } from "@dependable/components/Switch/v0";

const iconStyles = css`
  & {
    font-size: 64px;
    user-select: none;
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
          <${Switch} id="switch" .checked=${isDay()} onChange=${toggleDay} />
          <label for="switch">
            <${DaylightIcon} />
          </label>
        <//>
      <//>
    `;
  }
}
