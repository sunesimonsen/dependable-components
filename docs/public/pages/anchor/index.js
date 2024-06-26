import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultAnchor from "./DefaultAnchor.js";

export default class Page {
  render() {
    return html`
      <${Title}>Anchor<//>
      <${SubTitle}>
        The Anchor is a link that helps users navigate from one location to
        another.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        The Anchor component is a styled${"\n"}
        <code>${"<a>"}</code> tag. It accepts all standard anchor attributes and
        signals a way to navigate.
      </p>
      <${Example} src=${new URL("./DefaultAnchor.js", import.meta.url)}>
        <${DefaultAnchor} />
      <//>
    `;
  }
}
