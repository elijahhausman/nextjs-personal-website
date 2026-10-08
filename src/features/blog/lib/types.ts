import type { Icon } from "@/lib/icons";

export type BlogItem = {
  id: string;
  slug: string;
  name: string;
  icon: Icon;
  tags: string[];
  comments: [];
  createdAt: Date;
  updatedAt: Date;
};

export type BlogGroup = {
  id: string;
  name: string;
  description: string;
  items: BlogItem[];
};
