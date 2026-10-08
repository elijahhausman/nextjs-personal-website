import { cn } from "cn";
import { LucideChevronLeft, LucideInfo } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Alert } from "@/components/ui/alert";
import { Seperator } from "@/components/ui/seperator";
import { getBlogBySlug } from "@/features/blog/lib/blogs";
import { blogsPath } from "@/lib/paths";

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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h2
              id="why-this-matters"
              className="pt-4 font-semibold text-2xl text-foreground tracking-tight"
            >
              Why this matters
            </h2>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>

            <ul className="ml-6 list-disc space-y-2 marker:text-muted-foreground">
              <li>Curabitur blandit tempus porttitor</li>
              <li>Vestibulum id ligula porta felis euismod semper</li>
              <li>Nullam quis risus eget urna mollis ornare</li>
            </ul>

            <h2
              id="getting-started"
              className="pt-4 font-semibold text-2xl text-foreground tracking-tight"
            >
              Getting started
            </h2>

            <p>
              Maecenas faucibus mollis interdum. Run{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                npm run dev
              </code>{" "}
              and open the page in your browser.
            </p>

            <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-sm leading-6">
              <code>{`npm install something-cool\nnpm run dev`}</code>
            </pre>

            <Alert variant="info">
              <LucideInfo className="size-4" />
              <span>
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod.
              </span>
            </Alert>

            <h3
              id="a-smaller-detail"
              className="pt-2 font-semibold text-foreground text-xl"
            >
              A smaller detail
            </h3>

            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Donec id elit non mi porta gravida at eget metus.
            </p>

            <h2
              id="wrapping-up"
              className="pt-4 font-semibold text-2xl text-foreground tracking-tight"
            >
              Wrapping up
            </h2>

            <p>
              Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </article>

          <div className="hidden space-y-8 lg:block">
            {blog.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-zinc-700 bg-muted/50 px-2.5 py-0.5 font-medium text-muted-foreground text-xs"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            )}

            <aside className="sticky top-6">
              <nav className="rounded-lg border border-zinc-700 bg-muted/50 p-4">
                <h4 className="mb-3 font-semibold text-foreground text-sm">
                  Table of Contents
                </h4>

                <ul className="space-y-2 text-muted-foreground text-sm">
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
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
