import { html } from "@dependable/view";
import { route, params } from "@dependable/nano-router";
import { DefaultLayout } from "./DefaultLayout.js";
import { PageContainer } from "./PageContainer.js";

export class RootView {
  render() {
    switch (route()) {
      case "page":
        const { id } = params();

        return html`<${DefaultLayout}><${PageContainer} id=${id} /><//>`;
      default:
        return html`<${DefaultLayout}><${PageContainer} id="index" /><//>`;
    }
  }
}
