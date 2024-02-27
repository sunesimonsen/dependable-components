import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";

import DefaultSkeleton from "./DefaultSkeleton.js";
import RandomWidth from "./RandomWidth.js";

export default class Page {
  render() {
    return html`
      <${Title}>Skeleton<//>
      <${SubTitle}>
        A Skeleton loader shows users a blank version of a page or section of a
        page into which content is gradually loaded. It provides a visual
        estimate of the space needed.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        Skeleton loaders are the same color as the text color at 10% opacity.
      </p>
      <${Example} src=${new URL("./DefaultSkeleton.js", import.meta.url)}>
        <${DefaultSkeleton} />
      <//>
      <${Heading} level="3">Random widths<//>
      <p>
        If you want to make the skeleton a bit more dynamic, you can
        specify${"\n"}
        <code>from</code> and <code>to</code> properties to randomly pick a
        procentage width in the given range. Both values default to${"\n"}
        <code>100</code>.
      </p>
      <${Example} src=${new URL("./RandomWidth.js", import.meta.url)}>
        <${RandomWidth} />
      <//>
    `;
  }
}
