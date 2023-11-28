import { html } from "@dependable/view";
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
      <${Title}>26px<//>
      <${SubTitle}>
        ${"These icon components is extracted from "}
        <${Anchor} href="https://garden.zendesk.com/design/icons">
          Zendesk Garden
        <//>
        ${" and turned into components."}
      <//>
      <${Line} />
      <p>
        Tip <${TipIcon} /> click on the icon label to copy the
        import to that clipboard.
      </p>
      <div className=${columnStyles}>
         <${AnswerBot26Icon} />
         <${IconCopyButton}>AnswerBot26Icon<//>
         <${App26Icon} />
         <${IconCopyButton}>App26Icon<//>
         <${ArrangeContent26Icon} />
         <${IconCopyButton}>ArrangeContent26Icon<//>
         <${ArrowRightLeft26Icon} />
         <${IconCopyButton}>ArrowRightLeft26Icon<//>
         <${BarChart26Icon} />
         <${IconCopyButton}>BarChart26Icon<//>
         <${Book26Icon} />
         <${IconCopyButton}>Book26Icon<//>
         <${BotGeneric26Icon} />
         <${IconCopyButton}>BotGeneric26Icon<//>
         <${Building26Icon} />
         <${IconCopyButton}>Building26Icon<//>
         <${CallIn26Icon} />
         <${IconCopyButton}>CallIn26Icon<//>
         <${Chat26Icon} />
         <${IconCopyButton}>Chat26Icon<//>
         <${Checkbox26Icon} />
         <${IconCopyButton}>Checkbox26Icon<//>
         <${Clipboard26Icon} />
         <${IconCopyButton}>Clipboard26Icon<//>
         <${Clock26Icon} />
         <${IconCopyButton}>Clock26Icon<//>
         <${CloudUpload26Icon} />
         <${IconCopyButton}>CloudUpload26Icon<//>
         <${CreditCard26Icon} />
         <${IconCopyButton}>CreditCard26Icon<//>
         <${Customize26Icon} />
         <${IconCopyButton}>Customize26Icon<//>
         <${Dashboard26Icon} />
         <${IconCopyButton}>Dashboard26Icon<//>
         <${Ellipsis26Icon} />
         <${IconCopyButton}>Ellipsis26Icon<//>
         <${FileDocument26Icon} />
         <${IconCopyButton}>FileDocument26Icon<//>
         <${FileError26Icon} />
         <${IconCopyButton}>FileError26Icon<//>
         <${FileImage26Icon} />
         <${IconCopyButton}>FileImage26Icon<//>
         <${FilePdf26Icon} />
         <${IconCopyButton}>FilePdf26Icon<//>
         <${FilePresentation26Icon} />
         <${IconCopyButton}>FilePresentation26Icon<//>
         <${FileSpreadsheet26Icon} />
         <${IconCopyButton}>FileSpreadsheet26Icon<//>
         <${FileZip26Icon} />
         <${IconCopyButton}>FileZip26Icon<//>
         <${File26Icon} />
         <${IconCopyButton}>File26Icon<//>
         <${Garden26Icon} />
         <${IconCopyButton}>Garden26Icon<//>
         <${GridAdd26Icon} />
         <${IconCopyButton}>GridAdd26Icon<//>
         <${Headset26Icon} />
         <${IconCopyButton}>Headset26Icon<//>
         <${HelpCenter26Icon} />
         <${IconCopyButton}>HelpCenter26Icon<//>
         <${Hook26Icon} />
         <${IconCopyButton}>Hook26Icon<//>
         <${KnowledgeBase26Icon} />
         <${IconCopyButton}>KnowledgeBase26Icon<//>
         <${LineChart26Icon} />
         <${IconCopyButton}>LineChart26Icon<//>
         <${Macro26Icon} />
         <${IconCopyButton}>Macro26Icon<//>
         <${Moderation26Icon} />
         <${IconCopyButton}>Moderation26Icon<//>
         <${Monitor26Icon} />
         <${IconCopyButton}>Monitor26Icon<//>
         <${Organization26Icon} />
         <${IconCopyButton}>Organization26Icon<//>
         <${Person26Icon} />
         <${IconCopyButton}>Person26Icon<//>
         <${Platform26Icon} />
         <${IconCopyButton}>Platform26Icon<//>
         <${Play26Icon} />
         <${IconCopyButton}>Play26Icon<//>
         <${RelationshapeChat26Icon} />
         <${IconCopyButton}>RelationshapeChat26Icon<//>
         <${RelationshapeConnect26Icon} />
         <${IconCopyButton}>RelationshapeConnect26Icon<//>
         <${RelationshapeExplore26Icon} />
         <${IconCopyButton}>RelationshapeExplore26Icon<//>
         <${RelationshapeGather26Icon} />
         <${IconCopyButton}>RelationshapeGather26Icon<//>
         <${RelationshapeGuide26Icon} />
         <${IconCopyButton}>RelationshapeGuide26Icon<//>
         <${RelationshapeMessage26Icon} />
         <${IconCopyButton}>RelationshapeMessage26Icon<//>
         <${RelationshapeSell26Icon} />
         <${IconCopyButton}>RelationshapeSell26Icon<//>
         <${RelationshapeSupport26Icon} />
         <${IconCopyButton}>RelationshapeSupport26Icon<//>
         <${RelationshapeTalk26Icon} />
         <${IconCopyButton}>RelationshapeTalk26Icon<//>
         <${Search26Icon} />
         <${IconCopyButton}>Search26Icon<//>
         <${Security26Icon} />
         <${IconCopyButton}>Security26Icon<//>
         <${Shapes26Icon} />
         <${IconCopyButton}>Shapes26Icon<//>
         <${Sunshine26Icon} />
         <${IconCopyButton}>Sunshine26Icon<//>
         <${UserLock26Icon} />
         <${IconCopyButton}>UserLock26Icon<//>
         <${Widget26Icon} />
         <${IconCopyButton}>Widget26Icon<//>
         <${Workflow26Icon} />
         <${IconCopyButton}>Workflow26Icon<//>
         <${Zendesk26Icon} />
         <${IconCopyButton}>Zendesk26Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
