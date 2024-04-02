import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { Button } from "@dependable/components/Button/v0";
import { TextInput } from "@dependable/components/TextInput/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import {
  Select,
  SelectInput,
  SelectOption,
  SelectPopup,
} from "@dependable/components/Select/v0";
import { theme } from "@dependable/components/purple-theme/v0";

const paddingStyles = css`
  & {
    padding: 40px;
  }
`;

export default class Example {
  render() {
    return html`
      <div className=${classes(theme, paddingStyles)}>
        <${ColumnLayout} columns="1" justifyItems="start">
          <${ColumnLayout} columns="1" justifyItems="start" gap="0.5em">
            <label for="first-name">First name:</label>
            <${TextInput} id="first-name" placeholder="First name" />
            <label for="last-name">Last name:</label>
            <${TextInput} id="last-name" placeholder="Last name" />
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
          <${ColumnLayout} columns="2" justifyItems="start" gap="0.5em">
            <${Button} basic>Cancel<//>
            <${Button} type="submit" primary>Submit<//>
          <//>
        <//>
      </div>
    `;
  }
}
