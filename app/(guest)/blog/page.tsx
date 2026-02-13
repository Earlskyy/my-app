import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blog_categories, blog_Post } from "@/constants/blog";

export default function BlogPage() {

  
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <h1 className="text-2xl font-bold">This is my Blog Page</h1>
      <div>
        
         
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

        {blog_Post.map((x) => (
          <div key={x.id}>
            <Link href={`/blog/${x.slug}`}>
            <div className="border rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer mt-5 ">
            <h1 className="text-2xl font-bold text-bold mb-2">{x.title}</h1>
            <div className="flex gap-4 text-sm text-muted-foreground">
            <p>{x.author}</p>
            <p>{x.publishedDate}</p>
            </div>
            <p className="text-l mt-2">{x.overview}</p>
            </div>
            </Link>
          </div>
        ))}
          </div>
        
    
      
    </main>
  );
}
