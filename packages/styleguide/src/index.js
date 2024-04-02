import { h } from "@dependable/view";
import { render } from "@dependable/view";
import { routes } from "./routes.js";
import { Router, Routing } from "@dependable/nano-router";
import { createBrowserHistory } from "@nano-router/history";
import { RootView } from "./components/RootView.js";
import { ScriptLoader } from "./components/ScriptLoader.js";
import { colorScheme } from "./components/ColorSchemeSelector.js";

export { PageReference } from "./components/PageReference.js";
export { Title, SubTitle, Line, Heading } from "./components/Page.js";
export { Example } from "./components/Example.js";
export { SourceCode } from "./components/SourceCode.js";

const history = createBrowserHistory();

const router = new Router({
  routes,
  history,
});

document.body.setAttribute("data-prefers-color-scheme", colorScheme());

colorScheme.subscribe(() => {
  document.body.setAttribute("data-prefers-color-scheme", colorScheme());
});

export const styleguide = ({
  logo,
  title,
  repository,
  navigation,
  pageMap,
  importmap,
}) => {
  const history = createBrowserHistory();

  const router = new Router({
    routes,
    history,
  });

  render(
    h(
      "Context",
      { logo, title, repository, navigation, pageMap, importmap },
      h(Routing, { router }, h(RootView)),
      h(ScriptLoader, {
        sources: [
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.js",
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-js-templates.js",
        ],
      }),
      h("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css",
      }),
    ),
  );
};
