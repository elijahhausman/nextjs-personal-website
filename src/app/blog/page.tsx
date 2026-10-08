import { LucideTriangleAlert } from "lucide-react";
import type { Metadata } from "next";
import { Heading } from "@/components/heading";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { BlogList } from "@/features/blog/components/blog-list";

export const metadata: Metadata = {
  title: "Blogs | Elijah Hausman",
  description: "A curated list of blogs and tutorials.",
};

export default function BlogsPage() {
  return (
    <div className="px-4 py-6 lg:px-32 lg:py-16">
      <div className="mx-auto max-w-200 animate-fade-from-top space-y-16 pb-24">
        {/* Development warning */}
        <Alert variant="warning">
          <LucideTriangleAlert />

          <AlertTitle>
            This app is in development! If you have any questions, please reach
            out to{" "}
            <span className="break-all font-bold underline">
              hello@elijahhausman.com
            </span>
          </AlertTitle>
        </Alert>

        {/* Heading */}
        <Heading
          name="Blogs"
          description="A curated list of blogs and tutorials"
        />

        {/* Blog groups */}
        <BlogList />
      </div>
    </div>
  );
}
