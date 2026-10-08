"use client";

import { ChevronDown } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { Children, isValidElement, type ReactNode, useState } from "react";
import type { Components } from "react-markdown";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function MarkdownDetails({
  node,
  open,
  children,
  className,
}: ComponentPropsWithoutRef<"details"> & { node?: unknown }) {
  const [isOpen, setIsOpen] = useState(Boolean(open));

  const items = Children.toArray(children);
  const summary = items.find(
    (child) =>
      isValidElement<{ node?: { tagName?: string } }>(child) &&
      child.props.node?.tagName === "summary",
  );
  const body = items.filter((child) => child !== summary);

  const summaryLabel = isValidElement<{ children?: ReactNode }>(summary)
    ? summary.props.children
    : "Details";

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`mt-[1.25em] ${className ?? ""}`}
    >
      <CollapsibleTrigger className="flex cursor-pointer items-center gap-2 text-left font-medium">
        <span>{summaryLabel}</span>
        <ChevronDown
          aria-hidden
          width={16}
          height={16}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "-rotate-90" : "rotate-0"
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>{body}</CollapsibleContent>
    </Collapsible>
  );
}

export const markdownComponents: Components = {
  // ────────────────────────────────────────────────
  //  01 - Block elements
  // ────────────────────────────────────────────────

  // Heading
  h1: ({ node, ...props }) => <h1 {...props} />,
  h2: ({ node, ...props }) => <h2 {...props} />,
  h3: ({ node, ...props }) => <h3 {...props} />,
  h4: ({ node, ...props }) => <h4 {...props} />,
  h5: ({ node, ...props }) => <h5 {...props} />,
  h6: ({ node, ...props }) => <h6 {...props} />,

  // Paragraph
  p: ({ node, ...props }) => <p {...props} />,

  // Blockquote
  blockquote: ({ node, ...props }) => <blockquote {...props} />,

  // Seperator
  hr: ({ node, ...props }) => <Separator className="my-[2.4em]" {...props} />,

  // ────────────────────────────────────────────────
  //  02 - Inline formatting
  // ────────────────────────────────────────────────

  // Bold
  strong: ({ node, ...props }) => <strong {...props} />,
  b: ({ node, ...props }) => <b {...props} />,

  // Italic
  em: ({ node, ...props }) => <em {...props} />,
  i: ({ node, ...props }) => <i {...props} />,

  // Underline
  u: ({ node, ...props }) => <u {...props} />,

  // Strikethrough
  del: ({ node, ...props }) => <del {...props} />,
  s: ({ node, ...props }) => <s {...props} />,

  // Super and subscript
  sup: ({ node, ...props }) => <sup {...props} />,
  sub: ({ node, ...props }) => <sub {...props} />,

  // Highlight
  mark: ({ node, ...props }) => <mark {...props} />,

  // Comment
  abbr: ({ node, ...props }) => <abbr {...props} />,

  // ────────────────────────────────────────────────
  //  03 - Lists
  // ────────────────────────────────────────────────

  // List
  ul: ({ node, ...props }) => <ul {...props} />,
  li: ({ node, ...props }) => <li {...props} />,
  ol: ({ node, ...props }) => <ol {...props} />,

  // Checkbox
  input: ({ node, ...props }) =>
    props.type === "checkbox" ? (
      <Checkbox
        checked={Boolean(props.checked)}
        className="mr-2 inline-flex align-middle"
      />
    ) : (
      <input {...props} />
    ),

  // ────────────────────────────────────────────────
  //  04 - Table
  // ────────────────────────────────────────────────

  // Table
  table: ({ node, ...props }) => <Table {...props} />,
  tr: ({ node, ...props }) => <TableRow {...props} />,
  td: ({ node, ...props }) => <TableCell {...props} />,
  th: ({ node, ...props }) => <TableHead {...props} />,
  thead: ({ node, ...props }) => <TableHeader {...props} />,
  tbody: ({ node, ...props }) => <TableBody {...props} />,
  caption: ({ node, ...props }) => <TableCaption {...props} />,
  tfoot: ({ node, ...props }) => <TableFooter {...props} />,

  // ────────────────────────────────────────────────
  //  05 - Code
  // ────────────────────────────────────────────────

  // Code
  code: ({ node, ...props }) => <code {...props} />,
  pre: ({ node, ...props }) => <pre {...props} />,

  // ────────────────────────────────────────────────
  //  06 - Links and media
  // ────────────────────────────────────────────────

  // Link
  a: ({ node, ...props }) => <a {...props} />,

  // Media
  img: ({ node, alt, ...props }) => <img alt={alt ?? ""} {...props} />,
  figure: ({ node, ...props }) => <figure {...props} />,
  figcaption: ({ node, ...props }) => <figcaption {...props} />,
  video: ({ node, ...props }) => <video {...props} />,

  // ────────────────────────────────────────────────
  //  07 - Misc.
  // ────────────────────────────────────────────────

  // Collapsible
  details: MarkdownDetails,
  summary: ({ node, ...props }) => <summary {...props} />,
};
