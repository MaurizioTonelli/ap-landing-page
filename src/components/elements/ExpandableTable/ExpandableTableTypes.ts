import { ReactElement } from "react";

export type Header = {
  align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
  text: string;
};

export type Cell = {
  text: string;
  color?: string;
  align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
};

export type Row = {
  cells: Cell[];
  content?: Row[];
};

export type TableData = {
  headers: Header[];
  rows: Row[];
};
