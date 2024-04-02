import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultTag from "./DefaultTag.js";
import Colors from "./Colors.js";

export default class Page {
  render() {
    return html`
      <${Title}>Tags<//>
      <${SubTitle}>Tags let users categorize content using a keyword.<//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>The default usage of a Tag component.</p>
      <${Example} src=${new URL("./DefaultTag.js", import.meta.url)}>
        <${DefaultTag} />
      <//>
      <${Heading} level="3">Color<//>
      <p>
        You can provide a${"\n"}
        <a href="https://en.wikipedia.org/wiki/Hue" target="_blank">hue</a> to
        the tag to change its color.
      </p>
      <${Example} src=${new URL("./Colors.js", import.meta.url)}>
        <${Colors} />
      <//>
    `;
  }
}
