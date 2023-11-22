import { html } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import LightbulbStroke12Icon from "@dependable/icons/LightbulbStroke12Icon";

import CustomerListsFill26Icon from "@dependable/icons/CustomerListsFill26Icon";
import EmailFill26Icon from "@dependable/icons/EmailFill26Icon";
import GroupFill26Icon from "@dependable/icons/GroupFill26Icon";
import HomeFill26Icon from "@dependable/icons/HomeFill26Icon";
import SettingsFill26Icon from "@dependable/icons/SettingsFill26Icon";
import ViewsFill26Icon from "@dependable/icons/ViewsFill26Icon";

const columnStyles = css`
  & {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    gap: 1em;
    fill: gray;
    margin: 2em 0;
  }
`

const copyStyles = css`
  & {
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = text => {
  interceptCopy = text
  document.execCommand("copy");
  interceptCopy = null;
}

class IconCopyButton {
  constructor() {
    this.onClick = () => {
      const name = this.props.children
      copy(`import ${name} from "@dependable/icons/${name}";`)
    }
  }

  render({ children }) {
    return html`
      <button onClick=${this.onClick} className=${copyStyles} title="Click to copy">
        ${children}
      </button>
    `
  }
}

class IconsPage {
  render() {
    return html`
      <${Title}>26px (fill)<//>
      <${SubTitle}>
        ${"These icon components is extracted from "}
        <${Anchor} href="https://garden.zendesk.com/design/icons">
          Zendesk Garden
        <//>
        ${" and turned into components."}
      <//>
      <${Line} />
      <p>
        Tip <${LightbulbStroke12Icon} /> click on the icon label to copy the
        import to that clipboard.
      </p>
      <div className=${columnStyles}>
         <${CustomerListsFill26Icon} />
         <${IconCopyButton}>CustomerListsFill26Icon<//>
         <${EmailFill26Icon} />
         <${IconCopyButton}>EmailFill26Icon<//>
         <${GroupFill26Icon} />
         <${IconCopyButton}>GroupFill26Icon<//>
         <${HomeFill26Icon} />
         <${IconCopyButton}>HomeFill26Icon<//>
         <${SettingsFill26Icon} />
         <${IconCopyButton}>SettingsFill26Icon<//>
         <${ViewsFill26Icon} />
         <${IconCopyButton}>ViewsFill26Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
