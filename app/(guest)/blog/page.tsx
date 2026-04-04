import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blog_categories, blog_Post } from "@/constants/blog";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
            Blog
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              My Blog
            </h1>
            <div className="w-16 border-t-2 border-primary" />
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Thoughts, insights, and stories about web development, design, and technology.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-sm shadow-slate-900/5">
          <p className="mb-4 text-sm font-medium text-foreground">Filter by category:</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog">
              <Button variant="default" size="sm" className="rounded-full px-4">
                All Posts
              </Button>
            </Link>

            {blog_categories.map((category) => (
              <Link key={category.slug} href={`/blog/category/${category.slug}`}>
                <Button variant="outline" size="sm" className="rounded-full px-4">
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Latest Articles
          </h2>

          {blog_Post.length === 0 ? (
            <div className="rounded-lg border border-border bg-background/50 p-12 text-center">
              <p className="text-muted-foreground">No blog posts yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {blog_Post.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="group rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-primary/50 hover:bg-background/80 hover:shadow-md cursor-pointer">
                    <div className="space-y-3">
                      {/* Title */}
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {post.title}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      {/* Overview */}
                      <p className="text-sm leading-6 text-muted-foreground">
                        {post.overview}
                      </p>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-3 items-center pt-2">
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                          {post.author}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.publishedDate}
                        </span>
                        <div className="flex gap-2">
                          {post.category.map((cat) => (
                            <span key={cat} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

