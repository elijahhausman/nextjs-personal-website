"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "./markdown-components";

type BlogContentProps = {
  slug: string;
};

function BlogContent({ slug }: BlogContentProps) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [slug]);

  return (
    <div className="typeset">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export { BlogContent };
