import { html } from "@dependable/htm";
import { observable } from "@dependable/state";
import { Button } from "@dependable/components/Button/v0";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
  DialogSubmitButton,
} from "@dependable/components/Dialog/v0";
import { Center } from "@dependable/components/Center/v0";

const visible = observable(false, { id: "default-dialog-visible" });

export default class Example {
  constructor() {
    this.showDialog = () => {
      visible(true);
    };

    this.closeDialog = () => {
      visible(false);
    };
  }

  renderDialog() {
    return html`
      <${Dialog} onClose=${this.closeDialog} onSubmit=${this.closeDialog}>
        <${DialogHeader}>Do you want to travel to space?<//>
        <${DialogBody}>
          <p>
            Space is an endless canvas that has captivated humanity's
            imagination for millennia. It is the vast expanse that exists beyond
            Earth's atmosphere, extending in all directions, seemingly without
            end. Out there, in the void, lies a cosmos filled with marvels and
            mysteries, from the fiery birth of stars in nebulae to the crushing
            darkness of black holes. Space is our final frontier, a realm that
            has spurred countless tales of adventure and exploration. It is the
            place where celestial bodies, including planets, stars, galaxies,
            and the remnants of cosmic explosions, dance in the silent poetry of
            gravitational choreography.
          </p>
        <//>
        <${DialogFooter}>
          <${DialogSubmitButton} primary>Start you journey<//>
        <//>
        <${DialogCloseButton} />
      <//>
    `;
  }

  render() {
    return html`
      <${Center}>
        <${Button} onClick=${this.showDialog}>Open dialog<//>
        ${visible() && this.renderDialog()}
      <//>
    `;
  }
}
