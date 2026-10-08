import Image from "next/image";
import { blogPath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import type { BlogItem as BlogItemProps } from "../lib/types";

function BlogItem({ name, icon, slug }: BlogItemProps) {
  return (
    <a href={blogPath(slug)} className="group rounded-md transition">
      <div className="flex items-center gap-x-4">
        <Image
          src={icon.src}
          width={20}
          height={20}
          alt={icon.name}
          className={cn("select-none", icon.isRounded && "rounded-sm")}
        />

        <span className="truncate font-medium underline decoration-transparent underline-offset-4 transition duration-125 group-hover:text-blue-300 group-hover:decoration-blue-300">
          {name}
        </span>
      </div>
    </a>
  );
}

export { BlogItem };
