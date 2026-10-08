import { LucideChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Seperator } from "@/components/ui/seperator";
import { BlogContent } from "@/features/blog/components/blog-content";
import { getBlogBySlug } from "@/features/blog/lib/blogs";
import { blogsPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const result = getBlogBySlug(slug);

  if (!result) {
    return notFound();
  }

  const { blog } = result;
  const icon = blog.icon;

  return (
    <div className="px-4 py-8 lg:py-16">
      <div className="mx-auto w-full max-w-5xl animate-fade-from-top space-y-8 pb-24">
        {/* Back Link */}
        <Link
          href={blogsPath()}
          className="group inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground"
        >
          <LucideChevronLeft className="size-4 transition-transform group-hover:-translate-x-px" />
          All posts
        </Link>

        {/* Post Header */}
        <header className="max-w-2xl space-y-6">
          <Image
            src={icon.src}
            width={60}
            height={60}
            alt={icon.name}
            className={cn("select-none", icon.isRounded && "rounded-xl")}
          />

          <h1 className="text-balance font-medium text-4xl text-foreground tracking-tight md:text-5xl">
            {blog.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <time
              dateTime={blog.createdAt.toISOString()}
              className="text-muted-foreground"
            >
              Published {dateFormatter.format(blog.createdAt)}
            </time>

            <span aria-hidden className="h-3.5 w-px bg-border" />

            <a
              href="#comments"
              className="text-primary underline decoration-transparent underline-offset-4 transition-colors hover:decoration-primary"
            >
              Comments
            </a>
          </div>
        </header>

        <Seperator />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_256px]">
          <article className="w-full max-w-2xl space-y-6 text-base text-foreground/90 leading-7">
            <BlogContent slug={slug} />
          </article>

          <div className="hidden space-y-8 lg:block">
            {blog.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <li key={tag}>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/50 text-muted-foreground ring-1 ring-foreground/10"
                    >
                      #{tag}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}

            <aside className="sticky top-6">
              <Card className="bg-secondary/50">
                <CardHeader>
                  <CardTitle>Table of contents</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#why-this-matters"
                        className="transition-colors hover:text-foreground"
                      >
                        Why this matters
                      </a>
                    </li>

                    <li>
                      <a
                        href="#getting-started"
                        className="transition-colors hover:text-foreground"
                      >
                        Getting started
                      </a>
                    </li>

                    <li>
                      <a
                        href="#a-smaller-detail"
                        className="pl-3 transition-colors hover:text-foreground"
                      >
                        A smaller detail
                      </a>
                    </li>

                    <li>
                      <a
                        href="#wrapping-up"
                        className="transition-colors hover:text-foreground"
                      >
                        Wrapping up
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
