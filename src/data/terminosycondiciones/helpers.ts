import type {
    DividerBlock,
    ListBlock,
    ParagraphBlock,
    SubtitleBlock,
} from "./types";

export const p = (text: string): ParagraphBlock => ({
  type: "paragraph",
  text,
});

export const list = (items: string[]): ListBlock => ({
  type: "list",
  items,
});

export const subtitle = (text: string): SubtitleBlock => ({
  type: "subtitle",
  text,
});

export const divider = (): DividerBlock => ({
  type: "divider",
});