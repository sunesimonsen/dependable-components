import { html, render } from "@dependable/view";
import { routes } from "./routes.js";
import { Router, Routing } from "@dependable/nano-router";
import { createBrowserHistory } from "@nano-router/history";
import { RootView } from "./components/RootView.js";
import { ScriptLoader } from "./components/ScriptLoader.js";

const history = createBrowserHistory();

const router = new Router({ routes, history });

render(html`
  <${Routing} router=${router}><${RootView} /><//>
  <${ScriptLoader}
    sources=${[
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.js",
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-js-templates.js",
    ]}
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css"
  />
`);
