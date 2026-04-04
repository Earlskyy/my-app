import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blog_Post } from "@/constants/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;

  const blogPost = blog_Post.find((x) => x.slug === post);
  if (!blogPost) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">{blogPost.title}</h1>
        <p className="text-muted-foreground text-sm">
          {blogPost.publishedDate} • {blogPost.author} • {blogPost.category.join(", ")}
        </p>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-base leading-7">{blogPost.content}</p>
      </article>
    </article>
  );
}
