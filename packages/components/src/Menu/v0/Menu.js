import { clone, html } from "@dependable/view";
import { Popup } from "../../Popup/v0/index.js";
import { MenuModel } from "./MenuModel.js";
import { MenuItem } from "./MenuItem.js";
import { SelectItemEvent } from "./events.js";
import { findSelectables } from "./children.js";

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
      const onSelect = this.props.onSelect;
      if (onSelect) onSelect(e);
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
        const selectables = this.getSelectables();
        this.model.showMenu(selectables);
        this.model.focusPrevious(selectables);
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
    };

    this.onKeydown = (e) => {
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

  render({ id, model, placement, margins, children, ...other }) {
    const [trigger, content] = children;

    const focusedKey = model.focused()?.key;

    return html`
      <Context model=${model}>
        ${clone(trigger, {
          props: {
            id: model.id,
            ref: this.createRef("triggerRef"),
            "aria-haspopup": "listbox",
            "aria-expanded": model.visible() ? "true" : "false",
            "aria-controls": `${model.id}-popup`,
            "aria-activedescendant":
              focusedKey && `${model.id}-item-${focusedKey}`,
            onClick: this.onTriggerClick,
            onKeyDown: this.onKeydown,
            onBlur: this.onBlur,
            ...other,
          },
        })}
        <div
          ref=${this.createRef("popupRef")}
          onSelectItem=${this.onSelectItem}
          onFocusItem=${this.onFocusItem}
        >
          ${model.visible() &&
          clone(content, { props: { id: `${model.id}-popup` } })}
        </div>
      </Context>
    `;
  }
}

let nextId = 0;

export class Menu {
  constructor({ id }) {
    this.model = new MenuModel({ id: id || `menu-${nextId++}` });
  }

  render({ children, ...other }) {
    return html`<${CustomMenu} model=${this.model} ...${other}>${children}<//>`;
  }
}
