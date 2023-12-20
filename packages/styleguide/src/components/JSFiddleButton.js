import { html } from "@dependable/view";
import { css } from "stylewars";
import { IconButton } from "@dependable/components/IconButton/v0";
import { JSFiddleLogo } from "./JSFiddleLogo.js";

const formStyles = css`
  & {
    display: inline;
  }
`;

const importmapScriptTag = (importmap) => `
<script type="importmap">
${importmap}
</script>
`;

const jsFiddleCSS = `\
html {
  height: 100%;
}

body {
  height: 100%;
  position: relative;
  margin: 0;
  padding: 20px;
}
`;

const template = (content) => `\
import { render } from "@dependable/view";
import { ThemeProvider as StyleguideThemeProvider } from "@dependable/components/default-theme/v0"

${content}

render(html\`<\${StyleguideThemeProvider}><\${Example} /><//>\`);
`;

const fetchContent = (src) =>
  fetch(src)
    .then(async (response) => response.text())
    .catch((e) => {
      console.error(e);
    });

export class JSFiddleButton {
  constructor() {
    this.onClick = () => {
      const src = this.props.src;

      return fetchContent(src).then((content) => {
        const form = this._formRef;

        form.querySelector("input[name=js]").value = template(content);
        form.querySelector("input[name=html]").value = importmapScriptTag(
          this.context.importmap,
        );
        form.submit();
      });
    };

    this._setFormRef = (ref) => {
      this._formRef = ref;
    };
  }

  render() {
    return html`
      <${IconButton} basic onClick=${this.onClick}>
        <${JSFiddleLogo} />
      <//>
      <form
        ref=${this._setFormRef}
        method="post"
        target="_blank"
        action="https://jsfiddle.net/api/post/library/pure/"
        className=${formStyles}
      >
        <input type="hidden" name="title" value="@depository/components" />
        <input
          type="hidden"
          name="description"
          value="See https://depository-components.surge.sh/ for more information"
        />
        <input type="hidden" name="js" />
        <input type="hidden" name="html" />
        <input type="hidden" name="css" value=${jsFiddleCSS} />
      </form>
    `;
  }
}
