import { redirect } from "next/navigation";
import { blogsPath } from "@/lib/paths";

export default function HomePage() {
  redirect(blogsPath());
}
