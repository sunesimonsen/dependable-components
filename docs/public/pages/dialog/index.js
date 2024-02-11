import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultDialog from "./DefaultDialog.js";
import DangerDialog from "./DangerDialog.js";

export default class Page {
  render() {
    return html`
      <${Title}>Dialog<//>
      <${SubTitle}>
        The dialog represents a modal or non-modal dialog box or other
        interactive component, such as a dismissible alert, inspector, or
        subwindow.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of a Dialog component.</p>
      <${Example} src=${new URL("./DefaultDialog.js", import.meta.url)}>
        <${DefaultDialog} />
      <//>
      <${Heading} level="3">Danger<//>
      <p>Use Danger styling for modals that enable a destructive action.</p>
      <${Example} src=${new URL("./DangerDialog.js", import.meta.url)}>
        <${DangerDialog} />
      <//>
    `;
  }
}
