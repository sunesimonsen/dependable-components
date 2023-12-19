import { html } from "@dependable/view";
import { css } from "stylewars";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const colorPreviewStyles = (variable) => css`
  & {
    background: var(${variable});
    border: 1px solid var(--dc-color-neutral-2);
    height: 1em;
    width: 1em;
  }
`;

class ColorPreview {
  render({ variable }) {
    return html`
      <span>${variable}:</span>
      <div className=${colorPreviewStyles(variable)} />
    `;
  }
}

export default class Example {
  render() {
    return html`
      <${ColumnLayout} columns="1" justifyItems="left" gap="1.5em">
        <${ColumnLayout} columns="250px auto" justifyItems="left" gap="0.5em">
          <${ColorPreview} variable="--dc-color-primary-0" />
          <${ColorPreview} variable="--dc-color-primary-1" />
          <${ColorPreview} variable="--dc-color-primary-2" />
        <//>
        <${ColumnLayout} columns="250px auto" justifyItems="left" gap="0.5em">
          <${ColorPreview} variable="--dc-color-focus" />
        <//>
        <${ColumnLayout} columns="250px auto" justifyItems="left" gap="0.5em">
          <${ColorPreview} variable="--dc-color-secondary-0" />
          <${ColorPreview} variable="--dc-color-secondary-1" />
          <${ColorPreview} variable="--dc-color-secondary-2" />
        <//>
        <${ColumnLayout} columns="250px auto" justifyItems="left" gap="0.5em">
          <${ColorPreview} variable="--dc-color-neutral-1" />
          <${ColorPreview} variable="--dc-color-neutral-2" />
          <${ColorPreview} variable="--dc-color-neutral-3" />
          <${ColorPreview} variable="--dc-color-neutral-4" />
        <//>
        <${ColumnLayout} columns="250px auto" justifyItems="left" gap="0.5em">
          <${ColorPreview} variable="--dc-text-color-0" />
          <${ColorPreview} variable="--dc-text-color-1" />
        <//>
        <${ColumnLayout} columns="250px auto" justifyItems="left" gap="0.5em">
          <${ColorPreview} variable="--dc-text-color-0-a-10" />
        <//>
      </${ColumnLayout}>
    `;
  }
}
