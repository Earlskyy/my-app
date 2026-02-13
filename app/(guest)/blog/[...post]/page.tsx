import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { blog_Post } from "@/constants/blog";
import { notFound } from "next/navigation";


export default async function ({params} : {params: Promise<{post: string}>} ) {
 const {post} = await params;

 const segment = post[0];
 
 console.log("this is first slug"+segment);


 const blogPost = blog_Post.find((x) => x.slug === segment);
  if (!blogPost || blogPost == null) {
    notFound();
  }

  

   return (
    <article className="py-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:underline mb-4">
        <ArrowLeft className="w-4 text-muted-foreground" />
        Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
      <p className="text-muted-foreground text-sm mb-6">{blogPost.publishedDate} • {blogPost.author} • {blogPost.category.join(" - ")}</p>
      <p className="text-gray-700 dark:text-gray-300">{blogPost.content}</p>
    </article>
   )
}


//     if (blog.id != post[0]) {
//         return (
//             <h1>Blog Not Found</h1>
//         )
//     }

//     if (post[1] === "comments") {
//         return (
//             <main className="mx-auto max-w-3xl px-6 py-10 space-y-6">
//                 <Link href={"/blog/" + (post[0])} className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
//                 <ArrowLeft className="h-4 w-4" />
//                 Back
//                 </Link>
//             <div className="flex w-fit items-center gap-2 text-sm text-muted-foreground ">
//             <h1>This is the comments page for {blog.title}</h1>
//             </div>
//             <div className="flex flex-col gap-4">
//                 {blog.comments.map((comm, x) => (
//                     <div className="justify-center" key={x}>
//                         {comm}
//                     </div>
//                 ))}
//             </div>
            
//             </main>
//         )
//     }

//   return (
//      <main className="mx-auto max-w-3xl px-6 py-10 space-y-8">
//       {/* Back */}
//       <Link
//         href="/blog"
//         className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
//       >
//         <ArrowLeft className="h-4 w-4" />
//         Back to Blog
//       </Link>

//       {/* Title */}
//       <div className="space-y-2">
//         <h1 className="text-3xl font-bold tracking-tight">{blog.title}</h1>
//         <p className="text-sm text-muted-foreground">
//           By <span className="font-medium">{blog.author}</span> ·{" "}
//           {blog.publishedDate}
//         </p>
//       </div>

//       {/* Content */}
//       <article className="prose prose-neutral dark:prose-invert max-w-none">
//         <p>{blog.content}</p>
//       </article>

//       {/* Actions */}
//       <div className="pt-4">
//         <Button asChild className="gap-2">
//           <Link href={slug + "/comments"}>
//             <MessageSquare className="h-4 w-4" />
//             View Comments
//           </Link>
//         </Button>
//       </div>
//     </main>
//   )


