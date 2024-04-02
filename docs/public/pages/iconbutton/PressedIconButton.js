import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import LightbulbStroke12Icon from "@dependable/icons/LightbulbStroke12Icon";

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
          <${IconButton}
            pill
            aria-pressed=${String(isDay())}
            onClick=${toggleDay}
          >
            <${LightbulbStroke12Icon} />
          <//>
          <${DaylightIcon} />
        <//>
      <//>
    `;
  }
}
