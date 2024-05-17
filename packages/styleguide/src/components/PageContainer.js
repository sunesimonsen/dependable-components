import { h } from "@dependable/view";
import { Page, PageSkeleton } from "./Page.js";
import { Suspense } from "@dependable/components/Suspense/v0";

export class PageContainer {
  render({ id }) {
    const { pageMap } = this.context;

    return h(
      Suspense,
      { fallback: h(PageSkeleton) },
      h(Page, {}, h(pageMap[id])),
    );
  }
}
