import { h } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

import AnswerBot26Icon from "@dependable/icons/AnswerBot26Icon";
import App26Icon from "@dependable/icons/App26Icon";
import ArrangeContent26Icon from "@dependable/icons/ArrangeContent26Icon";
import ArrowRightLeft26Icon from "@dependable/icons/ArrowRightLeft26Icon";
import BarChart26Icon from "@dependable/icons/BarChart26Icon";
import Book26Icon from "@dependable/icons/Book26Icon";
import BotGeneric26Icon from "@dependable/icons/BotGeneric26Icon";
import Building26Icon from "@dependable/icons/Building26Icon";
import CallIn26Icon from "@dependable/icons/CallIn26Icon";
import Chat26Icon from "@dependable/icons/Chat26Icon";
import Checkbox26Icon from "@dependable/icons/Checkbox26Icon";
import Clipboard26Icon from "@dependable/icons/Clipboard26Icon";
import Clock26Icon from "@dependable/icons/Clock26Icon";
import CloudUpload26Icon from "@dependable/icons/CloudUpload26Icon";
import CreditCard26Icon from "@dependable/icons/CreditCard26Icon";
import Customize26Icon from "@dependable/icons/Customize26Icon";
import Dashboard26Icon from "@dependable/icons/Dashboard26Icon";
import Ellipsis26Icon from "@dependable/icons/Ellipsis26Icon";
import FileDocument26Icon from "@dependable/icons/FileDocument26Icon";
import FileError26Icon from "@dependable/icons/FileError26Icon";
import FileImage26Icon from "@dependable/icons/FileImage26Icon";
import FilePdf26Icon from "@dependable/icons/FilePdf26Icon";
import FilePresentation26Icon from "@dependable/icons/FilePresentation26Icon";
import FileSpreadsheet26Icon from "@dependable/icons/FileSpreadsheet26Icon";
import FileZip26Icon from "@dependable/icons/FileZip26Icon";
import File26Icon from "@dependable/icons/File26Icon";
import Garden26Icon from "@dependable/icons/Garden26Icon";
import GridAdd26Icon from "@dependable/icons/GridAdd26Icon";
import Headset26Icon from "@dependable/icons/Headset26Icon";
import HelpCenter26Icon from "@dependable/icons/HelpCenter26Icon";
import Hook26Icon from "@dependable/icons/Hook26Icon";
import KnowledgeBase26Icon from "@dependable/icons/KnowledgeBase26Icon";
import LineChart26Icon from "@dependable/icons/LineChart26Icon";
import Macro26Icon from "@dependable/icons/Macro26Icon";
import Moderation26Icon from "@dependable/icons/Moderation26Icon";
import Monitor26Icon from "@dependable/icons/Monitor26Icon";
import Organization26Icon from "@dependable/icons/Organization26Icon";
import Person26Icon from "@dependable/icons/Person26Icon";
import Platform26Icon from "@dependable/icons/Platform26Icon";
import Play26Icon from "@dependable/icons/Play26Icon";
import RelationshapeChat26Icon from "@dependable/icons/RelationshapeChat26Icon";
import RelationshapeConnect26Icon from "@dependable/icons/RelationshapeConnect26Icon";
import RelationshapeExplore26Icon from "@dependable/icons/RelationshapeExplore26Icon";
import RelationshapeGather26Icon from "@dependable/icons/RelationshapeGather26Icon";
import RelationshapeGuide26Icon from "@dependable/icons/RelationshapeGuide26Icon";
import RelationshapeMessage26Icon from "@dependable/icons/RelationshapeMessage26Icon";
import RelationshapeSell26Icon from "@dependable/icons/RelationshapeSell26Icon";
import RelationshapeSupport26Icon from "@dependable/icons/RelationshapeSupport26Icon";
import RelationshapeTalk26Icon from "@dependable/icons/RelationshapeTalk26Icon";
import Search26Icon from "@dependable/icons/Search26Icon";
import Security26Icon from "@dependable/icons/Security26Icon";
import Shapes26Icon from "@dependable/icons/Shapes26Icon";
import Sunshine26Icon from "@dependable/icons/Sunshine26Icon";
import UserLock26Icon from "@dependable/icons/UserLock26Icon";
import Widget26Icon from "@dependable/icons/Widget26Icon";
import Workflow26Icon from "@dependable/icons/Workflow26Icon";
import Zendesk26Icon from "@dependable/icons/Zendesk26Icon";

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
      h(Title, {}, "26px"),
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
        h(AnswerBot26Icon),
        h(IconCopyButton, {}, "AnswerBot26Icon"),
        h(App26Icon),
        h(IconCopyButton, {}, "App26Icon"),
        h(ArrangeContent26Icon),
        h(IconCopyButton, {}, "ArrangeContent26Icon"),
        h(ArrowRightLeft26Icon),
        h(IconCopyButton, {}, "ArrowRightLeft26Icon"),
        h(BarChart26Icon),
        h(IconCopyButton, {}, "BarChart26Icon"),
        h(Book26Icon),
        h(IconCopyButton, {}, "Book26Icon"),
        h(BotGeneric26Icon),
        h(IconCopyButton, {}, "BotGeneric26Icon"),
        h(Building26Icon),
        h(IconCopyButton, {}, "Building26Icon"),
        h(CallIn26Icon),
        h(IconCopyButton, {}, "CallIn26Icon"),
        h(Chat26Icon),
        h(IconCopyButton, {}, "Chat26Icon"),
        h(Checkbox26Icon),
        h(IconCopyButton, {}, "Checkbox26Icon"),
        h(Clipboard26Icon),
        h(IconCopyButton, {}, "Clipboard26Icon"),
        h(Clock26Icon),
        h(IconCopyButton, {}, "Clock26Icon"),
        h(CloudUpload26Icon),
        h(IconCopyButton, {}, "CloudUpload26Icon"),
        h(CreditCard26Icon),
        h(IconCopyButton, {}, "CreditCard26Icon"),
        h(Customize26Icon),
        h(IconCopyButton, {}, "Customize26Icon"),
        h(Dashboard26Icon),
        h(IconCopyButton, {}, "Dashboard26Icon"),
        h(Ellipsis26Icon),
        h(IconCopyButton, {}, "Ellipsis26Icon"),
        h(FileDocument26Icon),
        h(IconCopyButton, {}, "FileDocument26Icon"),
        h(FileError26Icon),
        h(IconCopyButton, {}, "FileError26Icon"),
        h(FileImage26Icon),
        h(IconCopyButton, {}, "FileImage26Icon"),
        h(FilePdf26Icon),
        h(IconCopyButton, {}, "FilePdf26Icon"),
        h(FilePresentation26Icon),
        h(IconCopyButton, {}, "FilePresentation26Icon"),
        h(FileSpreadsheet26Icon),
        h(IconCopyButton, {}, "FileSpreadsheet26Icon"),
        h(FileZip26Icon),
        h(IconCopyButton, {}, "FileZip26Icon"),
        h(File26Icon),
        h(IconCopyButton, {}, "File26Icon"),
        h(Garden26Icon),
        h(IconCopyButton, {}, "Garden26Icon"),
        h(GridAdd26Icon),
        h(IconCopyButton, {}, "GridAdd26Icon"),
        h(Headset26Icon),
        h(IconCopyButton, {}, "Headset26Icon"),
        h(HelpCenter26Icon),
        h(IconCopyButton, {}, "HelpCenter26Icon"),
        h(Hook26Icon),
        h(IconCopyButton, {}, "Hook26Icon"),
        h(KnowledgeBase26Icon),
        h(IconCopyButton, {}, "KnowledgeBase26Icon"),
        h(LineChart26Icon),
        h(IconCopyButton, {}, "LineChart26Icon"),
        h(Macro26Icon),
        h(IconCopyButton, {}, "Macro26Icon"),
        h(Moderation26Icon),
        h(IconCopyButton, {}, "Moderation26Icon"),
        h(Monitor26Icon),
        h(IconCopyButton, {}, "Monitor26Icon"),
        h(Organization26Icon),
        h(IconCopyButton, {}, "Organization26Icon"),
        h(Person26Icon),
        h(IconCopyButton, {}, "Person26Icon"),
        h(Platform26Icon),
        h(IconCopyButton, {}, "Platform26Icon"),
        h(Play26Icon),
        h(IconCopyButton, {}, "Play26Icon"),
        h(RelationshapeChat26Icon),
        h(IconCopyButton, {}, "RelationshapeChat26Icon"),
        h(RelationshapeConnect26Icon),
        h(IconCopyButton, {}, "RelationshapeConnect26Icon"),
        h(RelationshapeExplore26Icon),
        h(IconCopyButton, {}, "RelationshapeExplore26Icon"),
        h(RelationshapeGather26Icon),
        h(IconCopyButton, {}, "RelationshapeGather26Icon"),
        h(RelationshapeGuide26Icon),
        h(IconCopyButton, {}, "RelationshapeGuide26Icon"),
        h(RelationshapeMessage26Icon),
        h(IconCopyButton, {}, "RelationshapeMessage26Icon"),
        h(RelationshapeSell26Icon),
        h(IconCopyButton, {}, "RelationshapeSell26Icon"),
        h(RelationshapeSupport26Icon),
        h(IconCopyButton, {}, "RelationshapeSupport26Icon"),
        h(RelationshapeTalk26Icon),
        h(IconCopyButton, {}, "RelationshapeTalk26Icon"),
        h(Search26Icon),
        h(IconCopyButton, {}, "Search26Icon"),
        h(Security26Icon),
        h(IconCopyButton, {}, "Security26Icon"),
        h(Shapes26Icon),
        h(IconCopyButton, {}, "Shapes26Icon"),
        h(Sunshine26Icon),
        h(IconCopyButton, {}, "Sunshine26Icon"),
        h(UserLock26Icon),
        h(IconCopyButton, {}, "UserLock26Icon"),
        h(Widget26Icon),
        h(IconCopyButton, {}, "Widget26Icon"),
        h(Workflow26Icon),
        h(IconCopyButton, {}, "Workflow26Icon"),
        h(Zendesk26Icon),
        h(IconCopyButton, {}, "Zendesk26Icon"),
      ),
    ];
  }
}
