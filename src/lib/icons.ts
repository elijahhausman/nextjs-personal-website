export type Icon = {
  name: string;
  src: string;
  isRounded?: boolean;
};

const root = `/icons`;

export const icons = {
  // frameworks
  hono: {
    name: `Hono`,
    src: `${root}/frameworks/hono.svg`,
  },
  next: {
    name: `Next.js`,
    src: `${root}/frameworks/next.svg`,
  },
  react: {
    name: `React`,
    src: `${root}/frameworks/react.svg`,
  },
  tailwind: {
    name: `Tailwind CSS`,
    src: `${root}/frameworks/tailwind.svg`,
  },

  // libraries
  shadcn: {
    name: `shadcn/ui`,
    isRounded: true,
    src: `${root}/libraries/shadcn.png`,
  },
  zod: {
    name: `Zod`,
    src: `${root}/libraries/zod.svg`,
  },

  // infrastructure
  cloudflare: {
    name: `Cloudflare`,
    src: `${root}/infrastructure/cloudflare.svg`,
  },
  railway: {
    name: `Railway`,
    src: `${root}/infrastructure/railway.svg`,
  },

  // database
  postgresql: {
    name: `PostgreSQL`,
    src: `${root}/database/postgresql.svg`,
  },
  prisma: {
    name: `Prisma`,
    src: `${root}/database/prisma.svg`,
  },
  redis: {
    name: `Redis`,
    src: `${root}/database/redis.svg`,
  },
  supabase: {
    name: `Supabase`,
    src: `${root}/database/supabase.svg`,
  },

  // services
  clerk: {
    name: `Clerk`,
    isRounded: true,
    src: `${root}/services/clerk.svg`,
  },
  github: {
    name: `GitHub`,
    src: `${root}/services/github.svg`,
  },
  resend: {
    name: `Resend`,
    src: `${root}/services/resend.svg`,
  },
  stripe: {
    name: `Stripe`,
    src: `${root}/services/stripe.svg`,
  },

  // applications
  cursor: {
    name: `Cursor`,
    src: `${root}/applications/cursor.svg`,
  },
  edge: {
    name: `Microsoft Edge`,
    src: `${root}/applications/edge.svg`,
  },
  vscode: {
    name: `VS Code`,
    src: `${root}/applications/vscode.svg`,
  },

  // languages
  typescript: {
    name: `TypeScript`,
    src: `${root}/languages/typescript.svg`,
  },

  // misc
  git: {
    name: `Git`,
    src: `${root}/misc/git.svg`,
  },
  windows: {
    name: `Windows`,
    src: `${root}/misc/windows.webp`,
  },
} as const satisfies Record<string, Icon>;
