import { Fragment } from "react";
import { Seperator } from "@/components/ui/seperator";
import { blogs } from "../lib/blogs";
import { BlogItem } from "./blog-item";

function BlogList() {
  return (
    <div className="flex flex-col gap-16">
      {blogs.map((group, index) => (
        <Fragment key={group.id}>
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2.5">
              <h2 className="font-semibold text-3xl">{group.name}</h2>
              <p className="text-muted-foreground">{group.description}</p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 pl-2.5 lg:grid-cols-2">
              {group.items.map((item) => (
                <BlogItem key={item.id} {...item} />
              ))}
            </div>
          </section>

          {index !== blogs.length - 1 && <Seperator />}
        </Fragment>
      ))}
    </div>
  );
}

export { BlogList };
