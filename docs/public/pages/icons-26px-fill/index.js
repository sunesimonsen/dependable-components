import { h } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

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
    align-items: center;
    gap: 1em;
    fill: #bbb;
    margin: 2em 0;
  }
`;

const copyStyles = css`
  & {
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    color: var(--dc-color-foreground);
    font-family: var(--dc-font-family);
  }

  &:focus {
    outline: none;
  }
`;

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = (text) => {
  interceptCopy = text;
  document.execCommand("copy");
  interceptCopy = null;
};

class IconCopyButton {
  constructor() {
    this.onClick = () => {
      const name = this.props.children;
      copy(`import ${name} from "@dependable/icons/${name}";`);
    };
  }

  render({ children }) {
    return h(
      "button",
      { onClick: this.onClick, className: copyStyles, title: "Click to copy" },
      children,
    );
  }
}

export default class Page {
  render() {
    return [
      h(Title, {}, "26px (fill)"),
      h(
        SubTitle,
        {},
        "These icon components is extracted from ",
        h(
          Anchor,
          { href: "https://garden.zendesk.com/design/icons" },
          "Zendesk Garden",
        ),
        " and turned into components.",
      ),
      h(Line),
      h(
        "p",
        {},
        "Tip ",
        h(TipIcon),
        " click on the icon label to copy the",
        "import to that clipboard.",
      ),
      h(
        "div",
        { className: columnStyles },
        h(CustomerListsFill26Icon),
        h(IconCopyButton, {}, "CustomerListsFill26Icon"),
        h(EmailFill26Icon),
        h(IconCopyButton, {}, "EmailFill26Icon"),
        h(GroupFill26Icon),
        h(IconCopyButton, {}, "GroupFill26Icon"),
        h(HomeFill26Icon),
        h(IconCopyButton, {}, "HomeFill26Icon"),
        h(SettingsFill26Icon),
        h(IconCopyButton, {}, "SettingsFill26Icon"),
        h(ViewsFill26Icon),
        h(IconCopyButton, {}, "ViewsFill26Icon"),
      ),
    ];
  }
}
