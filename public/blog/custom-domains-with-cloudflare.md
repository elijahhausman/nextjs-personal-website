# Heading 1: Markdown Feature Test

## Heading 2: Section Level

### Heading 3: Subsection

#### Heading 4

##### Heading 5

###### Heading 6

Paragraph text with **bold**, *italic*, ***bold and italic***, ~~strikethrough~~, <s>test</s>, `inline code`, and a [link](https://example.com).

Autolinked URL: https://example.com

Line one with a hard break
at the end of the line above.

<hr>test</hr>

---

## Inline Semantics

Text with <mark>highlighted</mark> words, an <abbr title="HyperText Markup Language">HTML</abbr> abbreviation, H<sub>2</sub>O, and E=mc<sup>2</sup>.

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

<del>Deleted with HTML</del> and <s>struck with HTML</s>.

## Links

- [Inline link](https://example.com)
- [Link with title](https://example.com "Example title")
- <https://example.com/autolink>

## Lists

### Unordered

- First item
- Second item
  - Nested item
  - Another nested item
    - Third level item
- Third item

### Ordered

1. Install the packages
2. Read the file
   1. Check the output
   2. - [ ] Compare with the source
3. Render it with `ReactMarkdown`

### Alphabetical and Roman (raw HTML needed)

<ol type="a">
  <li>Alpha item</li>
  <li>Bravo item</li>
</ol>

<ol type="I">
  <li>Roman one</li>
  <li>Roman two</li>
</ol>

### Task List

- [x] Set up react-markdown
- [x] Add remark-gfm
- [ ] Style the output
  - [x] Typeset stylesheet
  - [ ] Dark theme check
- [ ] Add a dark theme

## Definition List (raw HTML needed)

<dl>
  <dt>react-markdown</dt>
  <dd>Renders markdown as React elements.</dd>
  <dt>remark-gfm</dt>
  <dd>Adds tables, task lists, strikethrough, and autolinks.</dd>
  <dt>.typeset</dt>
  <dd>The wrapper class that scopes the stylesheet.</dd>
</dl>

## Disclosure (Collapsible)

<details>
<summary>Click to expand the setup steps</summary>

1. Install `react-markdown` and `remark-gfm`
2. Add `markdownComponents` to the renderer
3. Wrap the output in `.typeset`

</details>

<details open>
<summary>This one starts open</summary>

Body content inside an open details block.

</details>

## Code

Inline: use `ReactMarkdown` and `remarkGfm`.

```tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const greeting = "Hello, world";
console.log(greeting);
```

```bash
npm install react-markdown remark-gfm
```

```json
{
  "name": "typeset-test",
  "version": "1.0.0"
}
```

```
Plain fenced block with no language
```

## Blockquotes

> Tip: Pass the file contents as a string, not a file path.

> Outer quote
>
> > Nested quote inside it

## Tables

| Method              | Runs on | Best for              |
| ------------------- | ------- | --------------------- |
| `fs` read           | Server  | Files in your project |
| `fetch` from public | Client  | Static public files   |
| `file.text()`       | Client  | User uploads          |

Alignment test:

| Left | Center | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |
| 1    |   2    |     3 |

Wide table to test horizontal overflow:

| Column one | Column two | Column three | Column four | Column five | Column six | Column seven | Column eight |
| ---------- | ---------- | ------------ | ----------- | ----------- | ---------- | ------------ | ------------ |
| value      | value      | value        | value       | value       | value      | value        | value        |

## Images

![Placeholder image](https://placehold.co/600x300 "Placeholder title")

## Footnotes

Footnotes use a marker and a definition.[^1] Another note here.[^note]

[^1]: The first footnote definition.
[^note]: A named footnote with **bold** text.

## Horizontal Rule

Content above the divider.

---

Content below the divider.

## Edge Cases

Escaped characters: \*not italic\*, \`not code\`, and \# not a heading.

A paragraph with an emoji 🚀 and unicode characters: café, naïve, 日本語.

Very long unbroken string to test wrapping: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

---

*End of test document.*
