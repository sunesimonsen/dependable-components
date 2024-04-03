import { h } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

import WordmarkBoldSuite26Icon from "@dependable/icons/WordmarkBoldSuite26Icon";
import WordmarkBoldSupport26Icon from "@dependable/icons/WordmarkBoldSupport26Icon";
import WordmarkCapitalSuite26Icon from "@dependable/icons/WordmarkCapitalSuite26Icon";
import WordmarkCapitalThe26Icon from "@dependable/icons/WordmarkCapitalThe26Icon";
import WordmarkCapitalZendesk26Icon from "@dependable/icons/WordmarkCapitalZendesk26Icon";
import WordmarkChat26Icon from "@dependable/icons/WordmarkChat26Icon";
import WordmarkConnect26Icon from "@dependable/icons/WordmarkConnect26Icon";
import WordmarkExplore26Icon from "@dependable/icons/WordmarkExplore26Icon";
import WordmarkGarden26Icon from "@dependable/icons/WordmarkGarden26Icon";
import WordmarkGather26Icon from "@dependable/icons/WordmarkGather26Icon";
import WordmarkGuide26Icon from "@dependable/icons/WordmarkGuide26Icon";
import WordmarkHelpCenter26Icon from "@dependable/icons/WordmarkHelpCenter26Icon";
import WordmarkInbox26Icon from "@dependable/icons/WordmarkInbox26Icon";
import WordmarkMessage26Icon from "@dependable/icons/WordmarkMessage26Icon";
import WordmarkMessaging26Icon from "@dependable/icons/WordmarkMessaging26Icon";
import WordmarkReach26Icon from "@dependable/icons/WordmarkReach26Icon";
import WordmarkSell26Icon from "@dependable/icons/WordmarkSell26Icon";
import WordmarkSunshine26Icon from "@dependable/icons/WordmarkSunshine26Icon";
import WordmarkSupport26Icon from "@dependable/icons/WordmarkSupport26Icon";
import WordmarkTalk26Icon from "@dependable/icons/WordmarkTalk26Icon";
import WordmarkZendesk26Icon from "@dependable/icons/WordmarkZendesk26Icon";

const columnStyles = css`
  & {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
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
      h(Title, {}, "26px (wordmark)"),
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
        h(WordmarkBoldSuite26Icon),
        h(IconCopyButton, {}, "WordmarkBoldSuite26Icon"),
        h(WordmarkBoldSupport26Icon),
        h(IconCopyButton, {}, "WordmarkBoldSupport26Icon"),
        h(WordmarkCapitalSuite26Icon),
        h(IconCopyButton, {}, "WordmarkCapitalSuite26Icon"),
        h(WordmarkCapitalThe26Icon),
        h(IconCopyButton, {}, "WordmarkCapitalThe26Icon"),
        h(WordmarkCapitalZendesk26Icon),
        h(IconCopyButton, {}, "WordmarkCapitalZendesk26Icon"),
        h(WordmarkChat26Icon),
        h(IconCopyButton, {}, "WordmarkChat26Icon"),
        h(WordmarkConnect26Icon),
        h(IconCopyButton, {}, "WordmarkConnect26Icon"),
        h(WordmarkExplore26Icon),
        h(IconCopyButton, {}, "WordmarkExplore26Icon"),
        h(WordmarkGarden26Icon),
        h(IconCopyButton, {}, "WordmarkGarden26Icon"),
        h(WordmarkGather26Icon),
        h(IconCopyButton, {}, "WordmarkGather26Icon"),
        h(WordmarkGuide26Icon),
        h(IconCopyButton, {}, "WordmarkGuide26Icon"),
        h(WordmarkHelpCenter26Icon),
        h(IconCopyButton, {}, "WordmarkHelpCenter26Icon"),
        h(WordmarkInbox26Icon),
        h(IconCopyButton, {}, "WordmarkInbox26Icon"),
        h(WordmarkMessage26Icon),
        h(IconCopyButton, {}, "WordmarkMessage26Icon"),
        h(WordmarkMessaging26Icon),
        h(IconCopyButton, {}, "WordmarkMessaging26Icon"),
        h(WordmarkReach26Icon),
        h(IconCopyButton, {}, "WordmarkReach26Icon"),
        h(WordmarkSell26Icon),
        h(IconCopyButton, {}, "WordmarkSell26Icon"),
        h(WordmarkSunshine26Icon),
        h(IconCopyButton, {}, "WordmarkSunshine26Icon"),
        h(WordmarkSupport26Icon),
        h(IconCopyButton, {}, "WordmarkSupport26Icon"),
        h(WordmarkTalk26Icon),
        h(IconCopyButton, {}, "WordmarkTalk26Icon"),
        h(WordmarkZendesk26Icon),
        h(IconCopyButton, {}, "WordmarkZendesk26Icon"),
      ),
    ];
  }
}
