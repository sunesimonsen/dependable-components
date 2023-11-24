import { html } from "@dependable/view";

export default class CheckBadgeFill12Icon {
  render(props) {
    return html`<svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      focusable="false"
      viewBox="0 0 12 12"
      ...${props}
    >
      <path
        fill="currentColor"
        d="M6.933.332l.113.101.89.89 1.26.001a1.48 1.48 0 011.453 1.198l.02.138.007.143-.002 1.259.893.892a1.48 1.48 0 01.19 1.86l-.089.12-.101.112-.893.891.001 1.258c0 .659-.432 1.224-1.056 1.415l-.136.035-.142.023-.144.007h-1.26l-.891.892a1.48 1.48 0 01-1.86.19l-.12-.089-.112-.101-.892-.893-1.258.001A1.478 1.478 0 011.35 9.48l-.02-.139-.006-.142V7.936l-.89-.89a1.48 1.48 0 01-.19-1.86l.088-.12.101-.112.89-.891.001-1.26c0-.72.516-1.32 1.198-1.452l.139-.02.142-.007h1.26l.891-.89a1.479 1.479 0 011.98-.102zm1.212 3.657l-.085.071L5.5 6.62 4.44 5.56a.628.628 0 00-.88 0 .63.63 0 00-.071.795l.071.085 1.5 1.5a.625.625 0 00.804.065l.076-.065 3-3a.61.61 0 000-.88.63.63 0 00-.795-.071z"
      />
    </svg> `;
  }
}