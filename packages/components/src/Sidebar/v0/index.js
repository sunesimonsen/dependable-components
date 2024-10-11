import { h } from "@dependable/view";
import { observable, computed } from "@dependable/state";
import { css, classes } from "stylewars";
import { Bar } from "../../Bar/v0";
import { BorderLayout } from "../../BorderLayout/v0";
import { IconButton } from "../../IconButton/v0";
import { ScrollArea } from "../../ScrollArea/v0";
import MenuStroke16Icon from "@dependable/icons/MenuStroke16Icon";
import { transparentColor } from "@dependable/components/theming/v0";

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
    return h(
      "Context",
      { visibleSidebar: this.visibleSidebar },
      h(
        BorderLayout,
        {
          stretched: true,
          className: classes(layoutStyles, className),
          ...other,
        },
        children,
      ),
    );
  }
}

const sidebarStyles = css`
  & {
    background: var(--dc-sidebar-background, var(--dc-color-neutral-97));
    position: relative;
    box-sizing: border-box;

    display: var(
      --dc-sidebar-display,
      var(--dc-sidebar-initial-display, initial)
    );
    width: var(--dc-sidebar-width);
    min-width: var(--dc-sidebar-min-width, 0);
    max-width: var(--dc-sidebar-max-width, auto);
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
    return h("div", {
      ...props,
      onClick: this.onClick,
      className: backdropStyles,
    });
  }
}

const resizerStyles = css`
  & {
    position: absolute;
    inset: 0 auto;
    width: 4px;
    background: transparent;
    z-index: 3;
    user-select: none;
    cursor: col-resize;
    transition: background-color 0.25s ease-in-out 0s;
  }

  &[data-dragging],
  &:hover {
    background: ${transparentColor("primary-50", 35)};
  }

  [data-layout="start"] > & {
    inset-inline-end: calc(var(--dc-sidebar-resizer-offset) * -1px - 2px);
  }

  [data-layout="end"] > & {
    inset-inline-start: calc(var(--dc-sidebar-resizer-offset) * 1px - 2px);
  }
`;

const scrollAreaStyles = css`
  & {
    position: absolute;
    padding: var(--dc-sidebar-padding, var(--dc-spacing-4));
    inset: 0;
    z-index: 1;
  }
`;

var dragImage = document.createElement("img");
dragImage.src =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

class Resizer {
  constructor() {
    this.resizerOffset = observable(0);
    let start = 0;
    this.onDragstart = (e) => {
      start = e.clientX;

      this.resizerOffset(0);
      e.dataTransfer.setDragImage(dragImage, 0, 0);
      e.dataTransfer.dropEffect = "move";
      this.props.dragging(true);
    };

    this.onDrag = (e) => {
      this.resizerOffset(e.clientX - start);

      e.preventDefault();
    };

    this.onDragover = (e) => {
      e.dataTransfer.dropEffect = "move";
      e.preventDefault();
    };

    this.onDrop = (e) => {
      this.resizerOffset(0);

      const offset = e.clientX - start;
      const offsetModifyer = this.props.layout === "start" ? 1 : -1;
      const sidebarWidth =
        this.props.sidebarRef().getBoundingClientRect().width +
        offsetModifyer * offset;

      this.props.resizedWidth(sidebarWidth + "px");
      this.props.dragging(false);

      e.preventDefault();
    };

    this.onDragEnd = (e) => {
      if (this.props.dragging()) {
        this.onDrop(e);
      }
    };
  }

  render() {
    return h("div", {
      style: {
        "--dc-sidebar-resizer-offset": this.resizerOffset(),
      },
      "data-dragging": this.props.dragging(),
      className: resizerStyles,
      draggable: "true",
      onDragstart: this.onDragstart,
      onDragEnd: this.onDragEnd,
      onDrag: this.onDrag,
      onDrop: this.onDrop,
      onDragover: this.onDragover,
    });
  }
}

const resizerBackdropStyles = css`
  & {
    position: fixed;
    inset: 0;
    cursor: col-resize;
    z-index: 2;
    background: white;
    opacity: 0;
  }
`;

class ResizerBackdrop {
  constructor() {
    this.onDragover = (e) => {
      e.dataTransfer.dropEffect = "move";
      e.preventDefault();
    };
  }

  render({ dragging }) {
    if (!dragging()) return null;

    return h("div", {
      className: resizerBackdropStyles,
      onDragover: this.onDragover,
    });
  }
}

export class Sidebar {
  constructor() {
    this.resizedWidth = observable(null);
    this.dragging = observable(false);
    this.sidebarRef = observable(null);
  }

  render(
    {
      children,
      id,
      className,
      style,
      resizable,
      "data-layout": layout = "start",
      ...other
    },
    { visibleSidebar },
  ) {
    const visibility = visibleSidebar() === id ? "visible" : "auto";

    return [
      h(Backdrop, {
        "aria-controls": id,
        "data-sidebar-visibility": visibility,
      }),
      h(
        Bar,
        {
          id,
          "data-sidebar-visibility": visibility,
          className: classes(sidebarStyles, className),
          ref: this.sidebarRef,
          "data-layout": layout,
          style: {
            ...style,
            ...(this.resizedWidth() && {
              "--dc-sidebar-width": this.resizedWidth(),
            }),
          },
          ...other,
        },
        resizable &&
          h(Resizer, {
            layout,
            sidebarRef: this.sidebarRef,
            resizedWidth: this.resizedWidth,
            dragging: this.dragging,
          }),
        h(ResizerBackdrop, {
          dragging: this.dragging,
        }),
        h(ScrollArea, { className: classes(scrollAreaStyles) }, children),
      ),
    ];
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
    return h(
      IconButton,
      {
        className: classes(toggleStyles, className),
        onClick: this.onClick,
        "aria-pressed": this.pressed(),
        ...other,
      },
      h(MenuStroke16Icon),
    );
  }
}
