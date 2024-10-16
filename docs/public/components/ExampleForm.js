import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { Button } from "@dependable/components/Button/v0";
import { TextInput } from "@dependable/components/TextInput/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { FieldLayout } from "@dependable/components/FieldLayout/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { BorderLayout } from "@dependable/components/BorderLayout/v0";
import { Bar } from "@dependable/components/Bar/v0";

import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";
import { padding } from "@dependable/components/theming/v0";

const frameStyles = css`
  & {
    border: thin solid var(--dc-color-neutral-90);
  }
`;

export class ExampleForm {
  render({ theme }) {
    return html`
      <${BorderLayout}
        stretched
        className=${classes(theme.styles, frameStyles)}
      >
        <${ColumnLayout} columns="1" justifyItems="start">
          <${ColumnLayout} justifyItems="start" className=${padding(5)}>
            <${FieldLayout} width="300px">
              <label for="first-name">First name:</label>
              <${TextInput} id="first-name" placeholder="First name" />
            <//>
            <${FieldLayout} width="300px">
              <label for="last-name">Last name:</label>
              <${TextInput} id="last-name" placeholder="Last name" />
            <//>

            <${FieldLayout} width="300px">
              <label for="gender">Gender:</label>
              <${Select}>
                <${SelectInput}>Select a gender<//>
                <${SelectPopup}>
                  <${SelectOption} key="other" value="female">Other<//>
                  <${SelectOption} key="female" value="female">Female<//>
                  <${SelectOption} key="male" value="female">Male<//>
                <//>
              <//>
            <//>
          <//>
        <//>
        <${Bar} data-layout="bottom">
          <${ToolbarLayout} sections="end">
            <${Button} basic>Cancel<//>
            <${Button} type="submit" primary>Submit<//>
          <//>
        <//>
      <//>
    `;
  }
}
