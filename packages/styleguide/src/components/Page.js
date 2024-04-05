import { h } from "@dependable/view";
import { css, classes } from "stylewars";
import { IconButton } from "@dependable/components/IconButton/v0";
import { Skeleton } from "@dependable/components/Skeleton/v0";
import LinkStroke16Icon from "@dependable/icons/LinkStroke16Icon";

const contentStyles = css`
  & {
    width: 800px;
    margin: 30px auto;
  }

  @media screen and (max-width: 1200px) {
    & {
      width: 90vw;
    }
  }
`;

export class Page {
  didMount() {
    const hash = this.context.router.location.hash;

    if (hash) {
      const anchor = document.querySelector(`a[name="${hash.slice(1)}"]`);
      if (anchor) anchor.scrollIntoView(true);
    }
  }

  render({ className, children }) {
    return h("div", { className: classes(contentStyles, className) }, children);
  }
}

const headingLinkStyles = css`
  & {
    position: absolute;
    bottom: 0;
    top: 0;
    left: -44px;
    font-size: 14px;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity ease-in 0.1s;
  }
`;

const headingStyles = css`
  & {
    position: relative;
  }

  &:focus-within
    > .${headingLinkStyles.toString()},
    &:hover
    > .${headingLinkStyles.toString()} {
    opacity: 1;
  }
`;

export class Heading {
  constructor() {
    this.onClick = () => {
      window.location.hash = `#${this.name}`;
    };
  }

  get name() {
    return this.props.children.join("").replace(/\s+/g, "-").toLowerCase();
  }

  render({ children, className, level, ...other }) {
    const type = `h${level}`;
    const name = this.name;

    return [
      h("a", { name: name }),
      h(
        type,
        { className: classes(headingStyles, className), ...other },
        h(
          "div",
          { className: headingLinkStyles },
          h(
            IconButton,
            { pill: true, basic: true, onClick: this.onClick },
            h(LinkStroke16Icon),
          ),
        ),
        children,
      ),
    ];
  }
}

const titleStyles = css`
  & {
    margin-bottom: 12px;
    color: var(--dc-color-foreground);
    line-height: 1.08333;
    font-size: 48px;
    font-weight: 700;
  }
`;

export class Title {
  render({ children }) {
    return h(Heading, { level: "1", className: titleStyles }, children);
  }
}

const subTitleStyles = css`
  & {
    color: var(--dc-color-neutral-30);
    font-size: 16px;
  }
`;

export class SubTitle {
  render({ children }) {
    return h("p", { className: subTitleStyles }, children);
  }
}

const lineStyles = css`
  & {
    color: var(--dc-color-neutral-30);
    font-size: 16px;
  }
`;

export class Line {
  render() {
    return h("hr", { className: lineStyles });
  }
}

const skeletonStyles = css`
  & {
    width: 800px;
  }
`;

export class PageSkeleton {
  render() {
    return h(
      Page,
      {},
      h(Title, {}, h(Skeleton, { from: "30", to: "50" })),
      h(SubTitle, {}, h(Skeleton, { from: "40", to: "60" })),
      h(Line, {}),
      h("h2", {}, h(Skeleton, { from: "70" })),
      h("h3", {}, h(Skeleton, { from: "70" })),
      h("p", {}, h(Skeleton, { from: "70" })),
      h("p", {}, h(Skeleton, { from: "70" })),
      h("p", {}, h(Skeleton, { from: "70" })),
      h("p", {}, h(Skeleton, { from: "70" })),
    );
  }
}
