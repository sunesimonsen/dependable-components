import { html, render } from "@dependable/view";
import { routes } from "./routes.js";
import { Router, Routing } from "@dependable/nano-router";
import { createBrowserHistory } from "@nano-router/history";
import { RootView } from "./components/RootView.js";

const history = createBrowserHistory();

const router = new Router({ routes, history });

render(html`
  <${Routing} router=${router}>
    <${RootView} />
  <//>
`);
