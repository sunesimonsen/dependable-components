import { html } from "@dependable/htm";
import { Suspense, lazy } from "@dependable/components/Suspense/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";

const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const LazyBotGeneric26Icon = lazy(async () => {
  const { default: BotGeneric26Icon } = await import(
    "@dependable/icons/BotGeneric26Icon"
  );
  await delay(200);
  return BotGeneric26Icon;
});

const LazyHomeFill26Icon = lazy(async () => {
  const { default: HomeFill26Icon } = await import(
    "@dependable/icons/HomeFill26Icon"
  );
  await delay(1000);
  return HomeFill26Icon;
});

const fallback = html`<p>Loading...</p>`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${Suspense} fallback=${fallback}>
          <${ColumnLayout} columns="2">
            <${IconButton}><${LazyBotGeneric26Icon} /><//>
            <${IconButton}><${LazyHomeFill26Icon} /><//>
          <//>
        <//>
      </${Center}>
    `;
  }
}
