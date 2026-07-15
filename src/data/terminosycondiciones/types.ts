export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface ListBlock {
  type: "list";
  items: string[];
}

export interface SubtitleBlock {
  type: "subtitle";
  text: string;
}

export interface DividerBlock {
  type: "divider";
}

export type Block =
  | ParagraphBlock
  | ListBlock
  | SubtitleBlock
  | DividerBlock;

export interface TermsSection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface TocSection {
  id: string;
  title: string;
}