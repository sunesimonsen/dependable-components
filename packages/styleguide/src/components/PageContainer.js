import { h } from "@dependable/view";
import { Page, PageSkeleton } from "./Page.js";
import { Cache, LOADED } from "@dependable/cache";

const pageCache = new Cache();

export class PageContainer {
  render({ id }) {
    const { pageLoaders } = this.context;
    pageCache.initialize(id, pageLoaders[id]);

    const [module, status, error] = pageCache.byId(id);

    if (error) throw error;

    if (status !== LOADED) {
      return h(PageSkeleton);
    }

    return h(Page, {}, h(module.default));
  }
}
