import { css } from "stylewars";

export const theme = css`
  & {
    --dc-color-primary-0: rgb(31 183 153);
    --dc-color-primary-1: rgb(16 156 129);
    --dc-color-primary-2: rgb(5 136 111);

    --dc-color-secondary-0: transparent;
    --dc-color-secondary-1: rgb(31 183 153 / 8%);
    --dc-color-secondary-2: rgb(31 183 153 / 20%);

    --dc-color-neutral-0: rgb(255, 255, 255);
    --dc-color-neutral-1: rgb(248, 249, 249);
    --dc-color-neutral-2: rgb(233, 235, 237);
    --dc-color-neutral-3: rgb(216, 220, 222);
    --dc-color-neutral-4: rgb(194, 200, 204);
    --dc-color-neutral-5: rgb(135, 146, 157);
    --dc-color-neutral-6: rgb(104, 115, 125);

    --dc-text-color-0: rgb(47, 57, 65);
    --dc-text-color-1: rgb(104, 115, 125);
    --dc-text-color-0-a-10: rgba(47, 57, 65, 0.1);

    --dc-color-focus: rgb(31 183 153 / 45%);

    --dc-focus-ring: 3px solid var(--dc-color-focus);

    --dc-component-border-radius: 4px;
  }
`;
