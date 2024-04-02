import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { IconButton } from "@dependable/components/IconButton/v0";
import { Skeleton } from "@dependable/components/Skeleton/v0";
import LinkStroke16Icon from "@dependable/icons/LinkStroke16Icon";

const contentStyles = css`
  & {
    width: 800px;
    margin: 30px auto;
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
    return html`
      <div className=${classes(contentStyles, className)}>${children}</div>
    `;
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

    return html`
      <a name=${name} />
      <${type} className=${classes(headingStyles, className)} ...${other}>
        <div className=${headingLinkStyles}>
          <${IconButton} pill basic onClick=${this.onClick}>
            <${LinkStroke16Icon} />
          <//>
        </div>
        ${children}
      <//>
    `;
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
    return html`<${Heading} level="1" className=${titleStyles}>${children}<//>`;
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
    return html`<p className=${subTitleStyles}>${children}</p>`;
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
    return html`<hr className=${lineStyles} />`;
  }
}

const skeletonStyles = css`
  & {
    width: 800px;
  }
`;

export class PageSkeleton {
  render() {
    return html`
      <${Page}>
        <${Title}><${Skeleton} from="30" to="50" /><//>
        <${SubTitle}><${Skeleton} from="40" to="60" /><//>
        <${Line}/>
        <h2><${Skeleton} from="70" /></h2>
        <h3><${Skeleton} from="70"/></h3>
        <p><${Skeleton} from="70"/></p>
        <p><${Skeleton} from="70"/></p>
        <p><${Skeleton} from="70"/></p>
        <p><${Skeleton} from="70"/></p>
      </${Page}>
    `;
  }
}
