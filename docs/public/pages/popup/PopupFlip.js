import { html } from "@dependable/htm";
import { Button } from "@dependable/components/Button/v0";
import { Popup } from "@dependable/components/Popup/v0";
import { ScrollArea } from "@dependable/components/ScrollArea/v0";
import { css } from "stylewars";

const popupStyles = css`
  & {
    border: thin solid grey;
    border-radius: 4px;
    padding: 1em;
    background: var(--dc-color-neutral-20);
    color: var(--dc-color-neutral-95);
  }
`;

const containerStyles = css`
  & {
    text-align: center;
    height: 200px;
  }
`;

export default class Example {
  constructor() {
    this.createRef = (name) => (ref) => {
      this[name] = ref;
    };
  }

  didMount() {
    this.popup = new Popup(this.anchorRef, this.popupRef, {
      overflow: "flip",
      margins: 4,
    });

    this.popup.show();
  }

  willUnmount() {
    this.popup.hide();
  }

  render() {
    return html`
      <${ScrollArea} className=${containerStyles}>
        <p>
          Space is an endless canvas that has captivated humanity's imagination
          for millennia. It is the vast expanse that exists beyond Earth's
          atmosphere, extending in all directions, seemingly without end. Out
          there, in the void, lies a cosmos filled with marvels and mysteries,
          from the fiery birth of stars in nebulae to the crushing darkness of
          black holes. Space is our final frontier, a realm that has spurred
          countless tales of adventure and exploration. It is the place where
          celestial bodies, including planets, stars, galaxies, and the remnants
          of cosmic explosions, dance in the silent poetry of gravitational
          choreography.
        </p>
        <${Button} ref=${this.createRef("anchorRef")}>Anchor<//>
        <div ref=${this.createRef("popupRef")} className=${popupStyles}>
          Popup content
        </div>
        <p>
          Embarking on a journey through the cosmos reveals the very fabric of
          existence. As we peer into the night sky, we observe light that has
          traveled across time and space, possibly originating from stars that
          have long since ceased to exist. This interstellar travel through the
          universe is not just a voyage over cosmic distances; it is equally a
          voyage through time itself. With advancements such as powerful
          telescopes and space probes, we've peeled back layers of cosmic
          secrets, uncovering a complex universe where particles can be
          entangled across vast stretches and massive orbs of gas collapse to
          ignite nuclear fusion, bringing light to the cosmic darkness. Every
          discovery pushes the boundaries of knowledge, inviting even more
          questions about the nature of reality and our place within this grand
          tapestry.
        </p>
      <//>
    `;
  }
}
