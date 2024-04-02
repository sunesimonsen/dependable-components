import { h } from "@dependable/view";
import { Button } from "../../Button/v0";
import { DialogSubmitEvent } from "./events.js";
export class DialogSubmitButton {
  constructor() {
    this.onClick = (e) => {
      e.target.dispatchEvent(new DialogSubmitEvent());
      e.preventDefault();
    };
  }

  render({ children, ...other }) {
    return h(
      Button,
      { primary: true, onClick: this.onClick, ...other },
      children,
    );
  }
}
