import { html } from "@dependable/htm";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@dependable/styleguide";
import DefaultInput from "./DefaultInput.js";
import MediaInput from "./MediaInput.js";
import ClearableInput from "./ClearableInput.js";
import SearchInput from "./SearchInput.js";
import FilterInput from "./FilterInput.js";
import DisabledInput from "./DisabledInput.js";
import ReadonlyInput from "./ReadonlyInput.js";

export default class Page {
  render() {
    return html`
      <${Title}>TextInput<//>
      <${SubTitle}>An Input lets users enter text into a field.<//>
      <${Line} />
      <${Heading} level="2">How to use it<//>
      <${Heading} level="3">Default<//>
      <p>A basic text input field.</p>
      <${Example} src=${new URL("./DefaultInput.js", import.meta.url)}>
        <${DefaultInput} />
      <//>
      <${Heading} level="3">Media input<//>
      <p>Media elements add even more context to an input.</p>
      <${Example} src=${new URL("./MediaInput.js", import.meta.url)}>
        <${MediaInput} />
      <//>
      <${Heading} level="3">Clearable input<//>
      <p>An input capable of clearing the input.</p>
      <${Example} src=${new URL("./ClearableInput.js", import.meta.url)}>
        <${ClearableInput} />
      <//>
      <${Heading} level="3">Search input<//>
      <p>A special input for search fields.</p>
      <${Example} src=${new URL("./SearchInput.js", import.meta.url)}>
        <${SearchInput} />
      <//>
      <${Heading} level="3">Filter input<//>
      <p>A special input for filtering items.</p>
      <${Example} src=${new URL("./FilterInput.js", import.meta.url)}>
        <${FilterInput} />
      <//>
      <${Heading} level="3"> Disabled<//>
      <p>
        A disabled Input prevents user interaction. It doesn't appear in the tab
        order, can't receive focus, and may not read aloud by a screenreader.
      </p>
      <${Example} src=${new URL("./DisabledInput.js", import.meta.url)}>
        <${DisabledInput} />
      <//>
      <${Heading} level="3">Read-only<//>
      <p>A read-only Input prevents user modification but allows selection.</p>
      <${Example} src=${new URL("./ReadonlyInput.js", import.meta.url)}>
        <${ReadonlyInput} />
      <//>
    `;
  }
}
