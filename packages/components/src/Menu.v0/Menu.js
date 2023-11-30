import { clone, html } from "@dependable/view";
import { Popup } from "../Popup.v0.js";
import { MenuModel } from "./MenuModel.js";
import { MenuItem } from "./MenuItem.js";
import { SelectItemEvent } from "./events.js";
import { findChildrenWithType } from "./children.js";

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
      this.model.toggleMenu();
    };

    this.onBlur = (e) => {
      this.model.hideMenu();
    };

    this.onSelect = (e) => {
      const onSelect = this.props.onSelectItem;
      if (onSelect) {
        onSelect(e);
      }

      if (!e.defaultPrevented) {
        this.model.hideMenu();
      }
    };

    this.onFocusItem = (e) => {
      this.model.focused(e.detail);
    };

    const handlers = {
      ArrowUp: (e) => {
        e.preventDefault();
        this.model.showMenu();
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
        if (focused) {
          e.preventDefault();

          const focusedItem = this.getSelectables().find(
            ({ key }) => focused.key === key,
          );

          if (focusedItem) {
            this.onSelect(new SelectItemEvent(focused));
          }
        } else {
          e.preventDefault();
          this.model.toggleMenu();
        }
      },
      Escape: (e) => {
        e.preventDefault();
        this.model.hideMenu();
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
    return findChildrenWithType(MenuItem, this.props.children);
  }

  get model() {
    return this.props.model;
  }

  updatePopupState() {}

  didMount() {
    this.popup = new Popup(this.triggerRef, this.popupRef, {
      placement: this.props.placement,
      margins: this.props.margins,
    });
  }

  didUpdate() {}

  willUnmount() {
    this.popup.hide();
  }

  didRender() {
    if (this.model.visible()) {
      this.popup.show();
    } else {
      this.popup.hide();
    }
  }

  render({ model, placement, margins, children, ...other }) {
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
            "aria-controls": `${model.id}-menu`,
            "aria-activedescendant":
              focusedKey && `${model.id}-item-${focusedKey}`,
            onClick: this.onTriggerClick,
            onKeyDown: this.onKeydown,
            onBlur: this.onBlur,
          },
        })}
        <div
          ref=${this.createRef("popupRef")}
          onSelectItem=${this.onSelect}
          onFocusItem=${this.onFocusItem}
        >
          ${model.visible() &&
          clone(content, { props: { id: `${model.id}-menu` } })}
        </div>
      </Context>
    `;
  }
}

export class Menu {
  constructor() {
    this.model = new MenuModel();
  }

  render({ children, placement, margins, ...other }) {
    return html`<${CustomMenu} model=${this.model} ...${other}>${children}<//>`;
  }
}
