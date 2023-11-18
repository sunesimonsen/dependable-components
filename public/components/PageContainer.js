import { observable } from "@dependable/state";
import { html } from "@dependable/view";

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
      const component = await import(`../pages/${id}/index.js`);
      this.Page = component.default;
      this.status("ready");
    } catch (e) {
      console.error(e);
      this.status("failed");
    }
  }

  didMount() {
    this.loadComponent();
  }

  didUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.loadComponent();
    }
  }

  render({ id }) {
    if (this.pageId() !== id) {
      this.loadComponent();
    }

    if (this.status() !== "ready") return html`Loading...`;

    return html`<${this.Page} />`;
  }
}
