import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { css } from "stylewars";
import { Bar } from "@dependable/components/Bar/v0";
import { ToolbarLayout } from "@dependable/components/ToolbarLayout/v0";
import { IconButton } from "@dependable/components/IconButton/v0";
import { ScrollArea } from "@dependable/components/ScrollArea/v0";
import GearStroke16Icon from "@dependable/icons/GearStroke16Icon";
import {
  SidebarLayout,
  Sidebar,
  SidebarToggle,
} from "@dependable/components/Sidebar/v0";
import { padding } from "@dependable/components/theming/v0";

const styles = css`
  & {
    height: 400px;
  }

  @media screen and (max-width: 1200px) {
    & {
      --dc-sidebar-display: none;
      --dc-sidebar-toggle-display: inline-flex;
    }
  }
`;

const settingsSidebarStyles = css`
  & {
    --dc-sidebar-display: none;
    padding: var(--dc-spacing-2);
  }
`;

class ToggleSettingsButton extends SidebarToggle {
  render() {
    return html`
      <${IconButton}
        pill
        basic
        onClick=${this.onClick}
        aria-pressed=${this.pressed()}
      >
        <${GearStroke16Icon} />
      <//>
    `;
  }
}

export default class Example {
  render() {
    return html`
      <${SidebarLayout} className=${styles}>
        <${Bar} data-layout="top">
          <${ToolbarLayout} sections="start end">
            <div>
              <${SidebarToggle} aria-controls="sidebar-example-main" />
            </div>
            <div>
              <${ToggleSettingsButton}
                aria-controls="sidebar-example-main-setting"
              />
            </div>
          <//>
        <//>
        <${Sidebar}
          id="sidebar-example-main"
          data-layout="start"
          className=${padding(4)}
          style="width: 150px"
        >
          Sidebar
        <//>
        <${Sidebar}
          id="sidebar-example-main-setting"
          data-layout="end"
          className=${settingsSidebarStyles}
          style="width: 150px"
        >
          Settings
        <//>
        <${ScrollArea}>
          <main>
            <article className=${padding(6)}>
              <h1>Venturing Beyond Earth: The Next Frontier in Space Travel</h1>
              <p>
                Humanity has always been driven by a relentless curiosity, a
                desire to explore the unknown and push beyond all boundaries.
                Space, the final frontier, beckons with a silent whisper that
                resonates with the adventurer in all of us. With great
                determination, our species has embarked on the audacious journey
                of space travel, transcending the shackles of terrestrial
                existence.
              </p>

              <h2>The Dawn of A New Era</h2>
              <p>
                In the brief span of a single century, we have progressed from
                the first flight of the Wright brothers to setting foot on the
                moon. Our insatiable quest has evolved into sophisticated
                missions that untangle the mysteries of the cosmos. The launch
                of the Kepler Telescope and the Mars rovers, the intrepid
                explorers of the void, have opened new windows into the vast
                expanse of space.
              </p>

              <h2>The Innovation of Spacecraft</h2>
              <p>
                Modern spacecraft are marvels of human ingenuity, equipped with
                advanced propulsion systems and life-sustaining habitats. The
                vision of organizations like NASA, SpaceX, and Blue Origin is
                not just to explore, but to inhabit. Projects such as the Orion
                Multi-Purpose Crew Vehicle and the Starship aim to transport
                humans further into the cosmos with the ambitious goals of
                colonizing Mars and beyond.
              </p>

              <h2>Overcoming Challenges</h2>
              <p>
                Space travel poses formidable challenges: from the physiological
                effects of microgravity to the psychological impacts of
                isolation. Yet, through the resilience of the human spirit and
                the relentless advancement of technology, these barriers are
                gradually being overcome. Artificial gravity habitat modules and
                breakthroughs in propulsion technology, like the ion thruster,
                signify the dawn of interstellar voyages.
              </p>

              <h2>A Collective Endeavor</h2>
              <p>
                The journey into space is not a pursuit for the lone astronaut
                but a collective endeavor of humankind. It's a symphony of
                international collaboration, where the International Space
                Station stands as a testament to what nations can achieve
                together. This cooperation extends to the pledge of responsible
                stewardship in the use of outer space, ensuring its preservation
                for future travelers.
              </p>

              <h2>Conclusion</h2>
              <p>
                As we stand on the precipice of interplanetary travel, we look
                forward to a future lit by the stars our ancestors navigated by.
                Space travel, once a distant dream, is a reality within our
                grasp. It is not just about the science or the technology; it is
                about the human story woven with the fabric of exploration, the
                same story that once sent voyagers across oceans and now sends
                them soaring among the galaxies.
              </p>
            </article>
          </main>
        <//>
      <//>
    `;
  }
}
