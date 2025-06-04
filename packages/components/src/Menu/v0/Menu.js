import { h } from "@dependable/view";
import { clone } from "@dependable/view";
import { Popup } from "../../Popup/v0/index.js";
import { MenuModel } from "./MenuModel.js";
import { SelectItemEvent } from "./events.js";
import { findSelectables } from "./children.js";

const compose =
  (...handlers) =>
  (e) => {
    for (const handler of handlers.filter(Boolean)) {
      handler(e);
      if (e.defaultPrevented) {
        break;
      }
    }
  };

export class CustomMenu {
  static defaultProps() {
    return {
      placement: "bottom-start",
      margins: 4,
    };
  }

  constructor() {
    this.createRef = (name) => (node) => {
      this[name] = node;
    };

    this.onTriggerClick = () => {
      const selectables = this.getSelectables();
      this.model.toggleMenu(selectables);
    };

    this.onSelectItem = (e) => {
      const onSelectItem = this.props.onSelectItem;
      if (onSelectItem) onSelectItem(e);
      if (!e.defaultPrevented) this.model.hideMenu();
    };

    this.onClose = () => {
      this.model.hideMenu();
      const onClose = this.props.onClose;
      if (onClose) onClose();
    };

    this.onBlur = () => {
      this.onClose();
    };

    this.onFocusItem = (e) => {
      this.model.focused(e.detail);
    };

    const handlers = {
      ArrowUp: (e) => {
        e.preventDefault();
        this.model.focusPrevious(this.getSelectables());
      },
      ArrowDown: (e) => {
        e.preventDefault();
        this.model.focusNext(this.getSelectables());
      },
      PageUp: (e) => {
        e.preventDefault();
        this.model.focusFirst(this.getSelectables());
      },
      PageDown: (e) => {
        e.preventDefault();
        this.model.focusLast(this.getSelectables());
      },
      Home: (e) => {
        e.preventDefault();
        this.model.focusFirst(this.getSelectables());
      },
      End: (e) => {
        e.preventDefault();
        this.model.focusLast(this.getSelectables());
      },
      Enter: (e) => {
        const focused = this.model.focused();
        const selectables = this.getSelectables();

        if (focused) {
          e.preventDefault();

          const focusedItem = selectables.find(
            ({ key }) => focused.key === key,
          );

          if (focusedItem) {
            this.onSelectItem(new SelectItemEvent(focusedItem));
          }
        } else {
          e.preventDefault();
          this.model.toggleMenu(selectables);
        }
      },
      Escape: (e) => {
        e.preventDefault();
        this.onClose();
      },
      j: (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          this.model.focusNext(this.getSelectables());
        }
      },
      k: (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          this.model.focusPrevious(this.getSelectables());
        }
      },
    };

    this.onKeyDown = (e) => {
      const handler = handlers[e.key];

      if (handler) {
        handler(e);
      }
    };
  }

  getSelectables() {
    return findSelectables(this.props.children);
  }

  get model() {
    return this.props.model;
  }

  didMount() {
    this.popup = new Popup(this.triggerRef, this.popupRef, {
      placement: this.props.placement,
      margins: this.props.margins,
      overflow: "flip",
    });
  }

  willUnmount() {
    this.onClose();
  }

  didRender() {
    if (this.model.visible()) {
      this.popup.show();
    } else {
      this.popup.hide();
    }
  }

  render({
    id,
    model,
    placement,
    margins,
    onClick,
    onKeyDown,
    onBlur,
    children,
    ...other
  }) {
    const [trigger, content] = children;
    const focusedKey = model.focused()?.key;

    return h(
      "Context",
      { model: model },
      clone(trigger, {
        props: {
          id: model.id,
          ref: this.createRef("triggerRef"),
          "aria-haspopup": "listbox",
          "aria-expanded": model.visible() ? "true" : "false",
          "aria-controls": `${model.id}-popup`,
          "aria-activedescendant":
            focusedKey && `${model.id}-item-${focusedKey}`,
          onClick: compose(onClick, this.onTriggerClick),
          onKeyDown: compose(onKeyDown, this.onKeyDown),
          onBlur: compose(onBlur, this.onBlur),
          ...other,
        },
      }),
      h(
        "div",
        {
          ref: this.createRef("popupRef"),
          onSelectItem: this.onSelectItem,
          onFocusItem: this.onFocusItem,
        },
        model.visible() &&
          Boolean(content?.children?.length) &&
          clone(content, { props: { id: `${model.id}-popup` } }),
      ),
    );
  }
}

let nextId = 0;

export class Menu {
  constructor({ id }) {
    this.model = new MenuModel({
      id: id || `menu-${nextId++}`,
    });
  }

  render({ children, ...other }) {
    return h(CustomMenu, { model: this.model, ...other }, children);
  }
}
