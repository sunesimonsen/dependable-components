import { html } from "@dependable/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultPulse from "./DefaultPulse.js";
import Colors from "./Colors.js";
import Sizes from "./Sizes.js";

class SpinnerPage {
  render() {
    return html`
      <${Title}>Pulse<//>
      <${SubTitle}>
        The pulse loader communicates ongoing activity after a user takes an
        action. It tells them that something is taking place.
      <//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>
        The default application of a pulse loader includes accessibility
        attributes that identify it as an indeterminate progress bar.
      </p>
      <${Example} src=${new URL("./DefaultPulse.js", import.meta.url)}>
        <${DefaultPulse} />
      <//>
      <${Heading} level="3">Color<//>
      <p>The loader inherits the color of the parent element.</p>
      <${Example} src=${new URL("./Colors.js", import.meta.url)}>
        <${Colors} />
      <//>
      <${Heading} level="3">Size<//>
      <p>The loader inherits the text size of the parent element.</p>
      <${Example} src=${new URL("./Sizes.js", import.meta.url)}>
        <${Sizes} />
      <//>
    `;
  }
}

export default SpinnerPage;
