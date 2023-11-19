import { observable } from "@dependable/state";
import { html } from "@dependable/view";
import { Page, PageSkeleton } from "./Page.js";

export class PageContainer {
  constructor() {
    this.Page = null;
    this.pageId = observable(null);
    this.status = observable("uninitialized");
  }

  async loadComponent() {
    const { id } = this.props;
    const { pageMap } = this.context;

    this.pageId(id);
    this.status("loading");

    try {
      const component = await pageMap[id]();
      this.Page = component.default;
      this.status("ready");
    } catch (e) {
      console.error(e);
      this.status("failed");
    }
  }

  render({ id }) {
    if (this.pageId() !== id) {
      this.loadComponent();
    }

    if (this.status() !== "ready") return html`<${PageSkeleton} />`;

    return html`<${Page}><${this.Page} /><//>`;
  }
}
