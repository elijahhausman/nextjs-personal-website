import { icons } from "@/lib/icons";
import type { BlogGroup } from "./types";

export const blogs: BlogGroup[] = [
  {
    id: "1",
    name: "Building with Databases",
    description: "The guides I wished I had when I was learning how to code.",
    items: [
      {
        id: "db-1",
        slug: "how-to-use-postgres",

        name: "How to Create a Database with Supabase",
        icon: icons["supabase"],

        tags: ["database", "postgres"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "db-2",
        slug: "how-to-use-redis",

        name: "How to use Redis to Cache your Applications",
        icon: icons["redis"],

        tags: ["redis", "caching"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    id: "2",
    name: "Domains, DNS & Cloudflare",
    description: "The guides I wished I had when I was learning how to code.",
    items: [
      {
        id: "cloud-1",
        slug: "custom-domains-with-cloudflare",

        name: "Setting Up Custom Domains with Cloudflare DNS",
        icon: icons["cloudflare"],

        tags: ["cloudflare", "dns", "networking"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "cloud-2",
        slug: "cname-and-txt-records",

        name: "Understanding A, CNAME, and TXT Records",
        icon: icons["cloudflare"],

        tags: ["dns", "networking"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "cloud-3",
        slug: "tls-encryption-and-redirects",

        name: "Configuring SSL/TLS Encryption and HTTPS Redirects",
        icon: icons["cloudflare"],

        tags: ["ssl/tls", "cloudflare"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    id: "3",
    name: "Styling with Tailwind & shadcn/ui",
    description: "The guides I wished I had when I was learning how to code.",
    items: [
      {
        id: "style-1",
        slug: "getting-started-with-tailwind",

        name: "Getting Started with Tailwind CSS Utility Classes",
        icon: icons["tailwind"],

        tags: ["tailwind", "css", "styling"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "style-2",
        slug: "building-with-shadcn-ui",

        name: "Building Accessible UI Components with shadcn/ui",
        icon: icons["shadcn"],

        tags: ["shadcn", "react", "ui"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "style-3",
        slug: "light-and-dark-mode-themes",

        name: "Managing Dark Mode and Theme Variables Seamlessly",
        icon: icons["shadcn"],

        tags: ["dark-mode", "theme", "css"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    id: "4",
    name: "Software Setup",
    description: "These are guides to replicate my developer environment.",
    items: [
      {
        id: "swe-1",
        slug: "my-software",

        name: "Elijah's Software Stack",
        icon: icons["windows"],

        tags: ["tailwind", "css", "styling"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "swe-2",
        slug: "my-edge",

        name: "Elijah's Edge Setup",
        icon: icons["edge"],

        tags: ["tailwind", "css", "styling"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "swe-3",
        slug: "my-vscode",

        name: "Elijah's VS Code Setup",
        icon: icons["vscode"],

        tags: ["tailwind", "css", "styling"],
        comments: [],

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];

export function getBlogBySlug(slug: string) {
  for (const group of blogs) {
    const blog = group.items.find((blog) => blog.slug === slug);

    if (blog) {
      return { group, blog };
    }
  }

  return null;
}
