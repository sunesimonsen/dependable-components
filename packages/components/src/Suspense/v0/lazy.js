import { h } from "@dependable/view";

export const lazy = (loader) => {
  let component = null;
  let error = null;

  return class Lazy {
    constructor() {
      this.loadComponent = async () => {
        const { suspended } = this.context;
        suspended(suspended() + 1);
        try {
          component = await loader();
        } catch (e) {
          error = e;
        } finally {
          suspended(suspended() - 1);
        }
      };
    }

    didMount() {
      if (!component) {
        this.loadComponent();
      }
    }

    render({ children, ...props }) {
      if (error) throw error;

      if (!component || this.context.suspended() > 0) {
        return null;
      }

      return h(component, props, children);
    }
  };
};
