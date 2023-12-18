import { render as renderView } from "@dependable/view";
import unexpected from "unexpected";
import unexpectedDom from "unexpected-dom";

export const expect = unexpected.clone().use(unexpectedDom);

export const render = (vdom) => {
  const container = document.createElement("div");

  renderView(vdom, container);

  return container.firstChild;
};
