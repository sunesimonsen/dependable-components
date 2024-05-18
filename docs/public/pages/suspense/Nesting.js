import { html } from "@dependable/htm";
import { css } from "stylewars";
import { Suspense, lazy } from "@dependable/components/Suspense/v0";
import { Center } from "@dependable/components/Center/v0";
import { Spinner } from "@dependable/components/Spinner/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import CheckLgStroke16Icon from "@dependable/icons/CheckLgStroke16Icon";

const delay = (timeout) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

const boxStyles = css`
  & {
    height: 40px;
    width: 40px;
    border: thin solid var(--dc-color-neutral-80);
    border-radius: var(--dc-component-border-radius);
  }
`;

class Box {
  render() {
    return html`<${Center} className=${boxStyles}>
      <${CheckLgStroke16Icon} />
    <//> `;
  }
}

const spinnerStyles = css`
  & {
    --dc-spinner-size: 16px;
    --dc-spinner-border-size: 2px;
  }
`;

class BoxSkeleton {
  render() {
    return html`
      <${Center} className=${boxStyles}>
        <${Spinner} className=${spinnerStyles} />
      <//>
    `;
  }
}

const boxSkeleton = html`<${BoxSkeleton} />`;

const LazyBox = lazy(async () => {
  await delay(Math.random() * 2000);
  return Box;
});

class Boxes {
  render({ count }) {
    const boxes = [];

    for (let i = 0; i < count; i++) {
      boxes.push(
        html`<${Suspense} key=${i} fallback=${boxSkeleton}><${LazyBox} /><//>`,
      );
    }

    return html` <${ColumnLayout} columns=${count}>${boxes}<//> `;
  }
}

const LazyBoxes = lazy(async () => {
  await delay(1000);
  return Boxes;
});

export default class Example {
  render() {
    const boxesSkeleton = html`<p>Loading...</p>`;

    return html`
      <${Center} style="height: 100px">
        <${Suspense} fallback=${boxesSkeleton}>
          <${LazyBoxes} count=${8} />
        <//>
      <//>
    `;
  }
}
