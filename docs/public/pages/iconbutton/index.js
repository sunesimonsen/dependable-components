import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultIconButton from "./DefaultIconButton.js";
import IconButtonTypes from "./IconButtonTypes.js";
import DangerIconButton from "./DangerIconButton.js";
import IconButtonShapes from "./IconButtonShapes.js";
import PressedIconButton from "./PressedIconButton.js";

export default class Page {
  render() {
    return html`
      <${Title}>Icon button<//>
      <${SubTitle}>
        Icon buttons (like Buttons) let users take action. They are used for
        repeated or persistent actions on a page and lack visible labels to
        simplify the UI.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The typical usage of an Icon button component.</p>
      <${Example} src=${new URL("./DefaultIconButton.js", import.meta.url)}>
        <${DefaultIconButton} />
      <//>
      <${Heading} level="3">Type<//>
      <p>
        Icon buttons have 3 types: basic, outline, and primary. The default type
        is basic.
      </p>
      <${Example} src=${new URL("./IconButtonTypes.js", import.meta.url)}>
        <${IconButtonTypes} />
      <//>
      <${Heading} level="3">Danger<//>
      <p>Use danger styling for Buttons that enable destructive action.</p>
      <${Example} src=${new URL("./DangerIconButton.js", import.meta.url)}>
        <${DangerIconButton} />
      <//>
      <${Heading} level="3">Shape<//>
      <p>Icon buttons are squares by default, but they can be circular too.</p>
      <${Example} src=${new URL("./IconButtonShapes.js", import.meta.url)}>
        <${IconButtonShapes} />
      <//>
      <${Heading} level="3">Pressed<//>
      <p>
        An icon button can be used as a toggle if
        <code>aria-pressed=true</code> is specified to indicate that the button
        is pressed.
      </p>
      <${Example} src=${new URL("./PressedIconButton.js", import.meta.url)}>
        <${PressedIconButton} />
      <//>
    `;
  }
}
