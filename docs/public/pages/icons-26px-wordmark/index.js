import { html } from "@dependable/view";
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

export default class Page {
  render() {
    return html`
      <${Title}>26px (wordmark)<//>
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
         <${WordmarkBoldSuite26Icon} />
         <${IconCopyButton}>WordmarkBoldSuite26Icon<//>
         <${WordmarkBoldSupport26Icon} />
         <${IconCopyButton}>WordmarkBoldSupport26Icon<//>
         <${WordmarkCapitalSuite26Icon} />
         <${IconCopyButton}>WordmarkCapitalSuite26Icon<//>
         <${WordmarkCapitalThe26Icon} />
         <${IconCopyButton}>WordmarkCapitalThe26Icon<//>
         <${WordmarkCapitalZendesk26Icon} />
         <${IconCopyButton}>WordmarkCapitalZendesk26Icon<//>
         <${WordmarkChat26Icon} />
         <${IconCopyButton}>WordmarkChat26Icon<//>
         <${WordmarkConnect26Icon} />
         <${IconCopyButton}>WordmarkConnect26Icon<//>
         <${WordmarkExplore26Icon} />
         <${IconCopyButton}>WordmarkExplore26Icon<//>
         <${WordmarkGarden26Icon} />
         <${IconCopyButton}>WordmarkGarden26Icon<//>
         <${WordmarkGather26Icon} />
         <${IconCopyButton}>WordmarkGather26Icon<//>
         <${WordmarkGuide26Icon} />
         <${IconCopyButton}>WordmarkGuide26Icon<//>
         <${WordmarkHelpCenter26Icon} />
         <${IconCopyButton}>WordmarkHelpCenter26Icon<//>
         <${WordmarkInbox26Icon} />
         <${IconCopyButton}>WordmarkInbox26Icon<//>
         <${WordmarkMessage26Icon} />
         <${IconCopyButton}>WordmarkMessage26Icon<//>
         <${WordmarkMessaging26Icon} />
         <${IconCopyButton}>WordmarkMessaging26Icon<//>
         <${WordmarkReach26Icon} />
         <${IconCopyButton}>WordmarkReach26Icon<//>
         <${WordmarkSell26Icon} />
         <${IconCopyButton}>WordmarkSell26Icon<//>
         <${WordmarkSunshine26Icon} />
         <${IconCopyButton}>WordmarkSunshine26Icon<//>
         <${WordmarkSupport26Icon} />
         <${IconCopyButton}>WordmarkSupport26Icon<//>
         <${WordmarkTalk26Icon} />
         <${IconCopyButton}>WordmarkTalk26Icon<//>
         <${WordmarkZendesk26Icon} />
         <${IconCopyButton}>WordmarkZendesk26Icon<//>
      </div>
    `;
  }
}

