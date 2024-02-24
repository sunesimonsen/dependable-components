import { html } from "@dependable/view";
import { css } from "stylewars";
import { Spinner } from "@dependable/components/Spinner/v0";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";

const firstSpinner = css`
  & {
    --dc-spinner-size: 20px;
    --dc-spinner-border-size: 3px;
    --dc-spinner-background: var(--dc-color-neutral-90);
    --dc-spinner-color: #ffb057;
  }
`;

const secondSpinner = css`
  & {
    --dc-spinner-size: 35px;
    --dc-spinner-border-size: 2px;
  }
`;

const thirdSpinner = css`
  & {
    --dc-spinner-background: rgba(255, 0, 0, 0.2);
    --dc-spinner-color: rgba(255, 0, 0, 0.7);
  }
`;

const fourthSpinner = css`
  & {
    --dc-spinner-size: 70px;
    --dc-spinner-border-size: 4px;
    --dc-spinner-background: #ffb057;
    --dc-spinner-color: #5eae91;
  }
`;

export default class Example {
  render() {
    return html`
      <${Center}>
        <${ColumnLayout} columns="auto auto auto auto" >
          <${Spinner} className=${firstSpinner} />
          <${Spinner} className=${secondSpinner} />
          <${Spinner} className=${thirdSpinner}/>
          <${Spinner} className=${fourthSpinner}/>
        <//>
      <//
    `;
  }
}
