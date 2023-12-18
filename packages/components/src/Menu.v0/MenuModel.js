import { observable } from "@dependable/state";

export class MenuModel {
  constructor({ id }) {
    this.id = id;
    this.visible = observable(false);
    this.focused = observable(null);
  }

  showMenu(selectables) {
    if (!this.visible()) {
      this.visible(true);
    }
  }

  hideMenu() {
    if (this.visible()) {
      this.visible(false);
      this.focused(null);
    }
  }

  toggleMenu(selectables) {
    if (this.visible()) {
      this.hideMenu();
    } else {
      this.showMenu(selectables);
    }
  }

  focusOffset(selectables, offset) {
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
  }

  focusNext(selectables) {
    this.focusOffset(selectables, 1);
  }

  focusPrevious(selectables) {
    this.focusOffset(selectables, -1);
  }

  focusFirst(selectables) {
    this.showMenu();

    this.focused(selectables[0] || null);
  }

  focusLast(selectables) {
    this.showMenu();

    this.focused(selectables.at(-1) || null);
  }
}
