import { observable } from "@dependable/state";

export class MenuModel {
  constructor() {
    this.id = crypto.randomUUID();
    this.visible = observable(false);
    this.focused = observable(null);

    this.showMenu = () => {
      if (!this.visible()) {
        this.visible(true);
        this.focused(null);
      }
    };

    this.hideMenu = () => {
      if (this.visible()) {
        this.visible(false);
        this.focused(null);
      }
    };

    this.toggleMenu = () => {
      if (this.visible()) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    };

    this.isItemFocused = (key) => {
      return this.focused()?.key === key;
    };

    this.focusOffset = (selectables, offset) => {
      this.showMenu();

      let newFocus;
      const focused = this.focused();
      if (focused) {
        const currentIndex = selectables.findIndex(
          ({ key }) => focused.key === key,
        );

        let newIndex = currentIndex + offset;

        newIndex = Math.min(newIndex, selectables.length - 1);
        newIndex = Math.max(newIndex, 0);

        newFocus = selectables[newIndex];
      } else if (offset < 0) {
        newFocus = selectables.at(offset);
      } else {
        newFocus = selectables.at(offset - 1);
      }

      this.focused(newFocus || null);
    };

    this.focusNext = (selectables) => {
      this.focusOffset(selectables, 1);
    };

    this.focusPrevious = (selectables) => {
      this.focusOffset(selectables, -1);
    };

    this.focusFirst = (selectables) => {
      this.showMenu();

      this.focused(selectables[0] || null);
    };

    this.focusLast = (selectables) => {
      this.showMenu();

      this.focused(selectables.at(-1) || null);
    };
  }
}
