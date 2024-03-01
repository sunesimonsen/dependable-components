import { html } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { css, classes } from "stylewars";
import { Bar } from "../../Bar/v0";
import { BorderLayout } from "../../BorderLayout/v0";
import { IconButton } from "../../IconButton/v0";
import MenuStroke12Icon from "@dependable/icons/MenuStroke12Icon";

const layoutStyles = css`
  & {
    position: relative;
  }
`;

export class SidebarLayout {
  constructor() {
    this.visibleSidebar = observable("");
  }

  render({ children, className, ...other }) {
    return html`
      <Context visibleSidebar=${this.visibleSidebar}>
        <${BorderLayout}
          stretched
          className=${classes(layoutStyles, className)}
          ...${other}
        >
          ${children}
        <//>
      </Context>
    `;
  }
}

const sidebarStyles = css`
  & {
    background: var(--dc-sidebar-background, var(--dc-color-neutral-97));

    display: var(
      --dc-sidebar-display,
      var(--dc-sidebar-initial-display, initial)
    );
    inset: 0;
  }

  &[data-layout="start"] {
    inset-inline-start: 0;
    inset-inline-end: auto;
  }

  &[data-layout="end"] {
    inset-inline-end: 0;
    inset-inline-start: auto;
  }

  &[data-sidebar-visibility="visible"] {
    display: var(--dc-sidebar-initial-display, initial);
    position: absolute;
    z-index: 2;
  }

  &[data-sidebar-visibility="visible"][data-layout="start"] {
    animation: &(slide-end) 100ms ease-out;
  }

  &[data-sidebar-visibility="visible"][data-layout="end"] {
    animation: &(slide-start) 100ms ease-out;
  }

  @keyframes &(slide-start) {
    0% {
      inset-inline-end: -10px;
    }
    100% {
      inset-inline-end: 0;
    }
  }

  @keyframes &(slide-end) {
    0% {
      inset-inline-start: -10px;
    }
    100% {
      inset-inline-start: 0;
    }
  }
`;

const backdropStyles = css`
  & {
    display: none;
    position: absolute;
    inset: 0;
    background-color: rgba(47, 57, 65, 0.35);
    z-index: 1;
  }

  &[data-sidebar-visibility="visible"] {
    display: block;
  }
`;

class Backdrop {
  constructor() {
    this.onClick = (e) => {
      const { visibleSidebar } = this.context;
      const controls = this.props["aria-controls"];
      visibleSidebar(visibleSidebar() === controls ? "" : controls);
    };
  }

  render(props) {
    return html`
      <div ...${props} onClick=${this.onClick} className=${backdropStyles} />
    `;
  }
}

export class Sidebar {
  render({ children, id, className, ...other }, { visibleSidebar }) {
    const visibility = visibleSidebar() === id ? "visible" : "auto";
    return html`
      <${Backdrop} aria-controls=${id} data-sidebar-visibility=${visibility} />
      <${Bar}
        id=${id}
        data-sidebar-visibility=${visibility}
        className=${classes(sidebarStyles, className)}
        ...${other}
      >
        ${children}
      <//>
    `;
  }
}

const toggleStyles = css`
  & {
    display: var(--dc-sidebar-toggle-display, none);
  }
`;

export class SidebarToggle {
  constructor() {
    this.onClick = (e) => {
      const { visibleSidebar } = this.context;
      const controls = this.props["aria-controls"];
      visibleSidebar(visibleSidebar() === controls ? "" : controls);
    };

    this.pressed = computed(() =>
      String(this.context.visibleSidebar() === this.props["aria-controls"]),
    );
  }

  render({ className, ...other }) {
    return html`
      <${IconButton}
        className=${classes(toggleStyles, className)}
        onClick=${this.onClick}
        aria-pressed=${this.pressed()}
        ...${other}
      >
        <${MenuStroke12Icon} />
      <//>
    `;
  }
}
