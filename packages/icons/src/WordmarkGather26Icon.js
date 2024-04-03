import { h, clone } from "@dependable/view";

const svg = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "69",
    height: "26",
    focusable: "false",
    viewBox: "0 0 69 26",
  },
  h("path", {
    fill: "currentColor",
    d: "M6.44 7.197c1.451 0 2.826.644 3.667 1.706V7.424h2.368V18.16c0 3.224-2.024 5.613-5.577 5.613-2.75 0-4.66-1.327-5.501-3.11l2.177-1.024c.573 1.214 1.605 1.972 3.286 1.972 2.024 0 3.247-1.479 3.247-3.376v-1.403c-.84 1.1-2.254 1.783-3.706 1.783-2.789 0-5.501-2.2-5.501-5.69 0-3.527 2.636-5.727 5.54-5.727zm13.485 0c1.451 0 2.865.644 3.667 1.63v-1.44h2.369v11h-2.369v-1.518c-.84 1.062-2.254 1.745-3.705 1.745-2.79 0-5.502-2.2-5.502-5.69 0-3.527 2.636-5.727 5.54-5.727zm34.344 0c3.285 0 5.692 2.351 5.692 5.613v.91h-9.169c.306 1.708 1.643 2.808 3.553 2.808 1.49 0 2.674-.797 3.247-1.973l1.948 1.062c-.955 1.82-2.712 2.997-5.195 2.997-3.515 0-5.845-2.466-5.845-5.652 0-3.224 2.483-5.765 5.769-5.765zM32.035 3.555v3.907h2.33v2.124h-2.33v4.362c0 1.973.305 2.276 2.33 2.276v2.238h-.344c-3.361 0-4.393-1.062-4.393-4.476v-4.4h-1.872V7.424h1.872v-2.58l2.407-1.289zM64.2 7.425v1.744c.611-1.138 1.681-1.745 3.247-1.745h1.07v2.238h-1.452c-2.024 0-2.827 1.024-2.827 3.3v5.462h-2.406v-11H64.2zM38.721 2.34v6.45c.763-.949 1.986-1.593 3.4-1.593 2.788 0 4.507 1.82 4.507 4.779v6.41h-2.407v-6.183c0-1.82-.878-2.958-2.674-2.958-1.566 0-2.789 1.176-2.789 3.11v6.031H36.39V2.341h2.33zM6.744 9.321c-1.987 0-3.515 1.555-3.515 3.565s1.528 3.566 3.515 3.566c2.025 0 3.515-1.593 3.515-3.566 0-1.972-1.49-3.565-3.515-3.565zm13.485 0c-1.986 0-3.514 1.555-3.514 3.565s1.528 3.566 3.514 3.566c2.025 0 3.515-1.593 3.515-3.566 0-1.972-1.49-3.565-3.515-3.565zm34-.076c-1.604 0-2.903 1.024-3.361 2.465h6.647c-.344-1.593-1.567-2.465-3.286-2.465z",
  }),
);

export default class WordmarkGather26Icon {
  render(props) {
    return clone(svg, { props });
  }
}
