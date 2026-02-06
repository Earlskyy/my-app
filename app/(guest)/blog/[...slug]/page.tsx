import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";


export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params

    console.log("slug", slug)

    const blog = {
        id: "my-first-blog",
        title: "My First Blog",
        content: "Hello World, this is my first blog and I am so glad today.",
        author: "Earl",
        publishedDate: "February 02, 2026",
        comments: ["Wow", "Nice one", "Amazing"]
    }

    if (blog.id != slug[0]) {
        return (
            <h1>Blog Not Found</h1>
        )
    }

    if (slug[1] === "comments") {
        return (
            <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
                <Link href={"/blog/" + (slug[0])} className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Back
                </Link>
            <div className="flex w-fit items-center gap-2 text-sm text-muted-foreground ">
            <h1>This is the comments page for {blog.title}</h1>
            </div>
            <div className="flex flex-col gap-4">
                {blog.comments.map((comm, x) => (
                    <div className="justify-center" key={x}>
                        {comm}
                    </div>
                ))}
            </div>
            
            </main>
        )
    }

  return (
     <main className="mx-auto max-w-3xl px-6 py-10 space-y-8">
      {/* Back */}
      <Link
        href="/blog"
        className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{blog.title}</h1>
        <p className="text-sm text-muted-foreground">
          By <span className="font-medium">{blog.author}</span> ·{" "}
          {blog.publishedDate}
        </p>
      </div>

      {/* Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <p>{blog.content}</p>
      </article>

      {/* Actions */}
      <div className="pt-4">
        <Button asChild className="gap-2">
          <Link href={slug + "/comments"}>
            <MessageSquare className="h-4 w-4" />
            View Comments
          </Link>
        </Button>
      </div>
    </main>
  )
}
