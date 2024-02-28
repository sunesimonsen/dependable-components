import { css } from "stylewars";

const margin = (size) => css`
  & {
    margin: ${size};
  }
`;

export const m1 = margin("4px");
export const m2 = margin("8px");
export const m3 = margin("12px");
export const m4 = margin("20px");
export const m5 = margin("32px");

const marginInline = (size, direction) => css`
  & {
    margin-inline-${direction}: ${size};
  }
`;

export const ms1 = marginInline("4px", "start");
export const ms2 = marginInline("8px", "start");
export const ms3 = marginInline("12px", "start");
export const ms4 = marginInline("20px", "start");
export const ms5 = marginInline("32px", "start");

export const me1 = marginInline("4px", "end");
export const me2 = marginInline("8px", "end");
export const me3 = marginInline("12px", "end");
export const me4 = marginInline("20px", "end");
export const me5 = marginInline("32px", "end");

const padding = (size) => css`
  & {
    padding: ${size};
  }
`;

export const p1 = padding("4px");
export const p2 = padding("8px");
export const p3 = padding("12px");
export const p4 = padding("20px");
export const p5 = padding("32px");

const paddingInline = (size, direction) => css`
  & {
    padding-inline-${direction}: ${size};
  }
`;

export const ps1 = paddingInline("4px", "start");
export const ps2 = paddingInline("8px", "start");
export const ps3 = paddingInline("12px", "start");
export const ps4 = paddingInline("20px", "start");
export const ps5 = paddingInline("32px", "start");

export const pe1 = paddingInline("4px", "end");
export const pe2 = paddingInline("8px", "end");
export const pe3 = paddingInline("12px", "end");
export const pe4 = paddingInline("20px", "end");
export const pe5 = paddingInline("32px", "end");
