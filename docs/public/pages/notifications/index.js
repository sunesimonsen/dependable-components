import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultNotification from "./DefaultNotification.js";
import Placements from "./Placements.js";
import Margins from "./Margins.js";

export default class Page {
  render() {
    return html`
      <${Title}>Notifications<//>
      <${SubTitle}>
        A Notification is a passive status update that keeps users informed of
        system progress.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of a Notification component.</p>
      <${Example} src=${new URL("./DefaultNotification.js", import.meta.url)}>
        <${DefaultNotification} />
      <//>
      <${Heading} level="3">Placements<//>
      <p>
        There are 6 placement options available. The Notification occupies the
        top-end position by default.
      </p>
      <${Example} noPadding src=${new URL("./Placements.js", import.meta.url)}>
        <${Placements} />
      <//>
      <${Heading} level="3">Notification area<//>
      <p>It is possible to limit the notification area using CSS.</p>
      <${Example} src=${new URL("./Margins.js", import.meta.url)}>
        <${Margins} />
      <//>
    `;
  }
}
