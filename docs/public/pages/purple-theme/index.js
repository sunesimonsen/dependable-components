import { html } from "@dependable/htm";
import { theme } from "@dependable/components/purple-theme/v0";
import { ThemePreview } from "../../components/ThemePreview.js";

export default class Page {
  render() {
    return html`<${ThemePreview} theme=${theme} />`;
  }
}
