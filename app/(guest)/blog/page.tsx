import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">This is my Blog Page</h1>

      <Link href="/blog/my-first-blog">
        <Button>
          Go to My First Blog
        </Button>
      </Link>
    </main>
  );
}
