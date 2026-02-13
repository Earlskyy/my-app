import { blog_Post, blog_categories, type BlogPost } from "@/constants/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Filter Blog Data
function postsInCategoryPath(posts: BlogPost[], categoryPath: string[]): BlogPost[] {
  return posts.filter((post) => {
    // Check Data and Filter it
    for (let i = 0; i < categoryPath.length; i++) {
      if (!post.category.includes(categoryPath[i])) {
        return false;
      }
    }
    return true;
  });

}

// Category Display Name
function categoryDisplayName(path: string[]): string {
  return path.map((slug) => blog_categories.find((category) => category.slug === slug)?.name ?? slug).join(" / ");
}

export default async function BlogPostPage({ params }: { params: Promise<{ category: string[] }> }) {
  const { category } = await params;
  let filteredPost: BlogPost[] = [];

  if (category) {
    filteredPost = postsInCategoryPath(blog_Post, category);
  }

  return (
    <div className="py-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:underline mb-4">
        <ArrowLeft className="w-4 text-muted-foreground" />
        Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">Category: {categoryDisplayName(category)}</h1>
      <p className="text-muted-foreground mb-6">{filteredPost.length} post{filteredPost.length !== 1 ? "s" : ""} in this category</p>

      {/* Filter Category */}
      <div className="mt-6 mb-4 flex gap-3">
        <Link href="/blog">
          <Button variant="outline">All Posts</Button>
        </Link>

        {blog_categories.map((category) => (
          <Link key={category.slug} href={`/blog/category/${category.slug}`}>
            <Button variant="outline">{category.name}</Button>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredPost.length === 0 ? (
          blog_Post.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="border rounded-lg p-4 hover:bg-muted/50">
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-muted-foreground text-base mt-1">{post.overview}</p>
                <p className="text-sm text-muted-foreground text-base mt-2">{post.publishedDate} • {post.author}</p>
              </div>
            </Link>
          ))
        ) : (
          filteredPost.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="border rounded-lg p-4 hover:bg-muted/50">
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-muted-foreground text-base mt-1">{post.overview}</p>
                <p className="text-sm text-muted-foreground text-base mt-2">{post.publishedDate} • {post.author}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}