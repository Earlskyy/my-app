export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    overview: string;
    content: string;
    author: string;
    publishedDate: string;
    category: string[];
}

export type Category = {
    slug: string;
    name: string;
    parent?: string;
}



export const blog_Post : BlogPost [] = [
    {
        id: "1",
        slug: "my-first-blog",
        title: "My First Blog",
        overview: "Welcome to my first vlog",
        content: "Hello World, this is my first blog and I am so glad today.",
        author: "Earl",
        publishedDate: "February 02, 2026",
        category: ["me"] 
    },
    {
        id: "2",
        title: "My Second Blog",
        slug: "my-second-blog",
        overview: "Welcome to my second blog",
        content: "Hello World, this is my second blog and I am so glad today.",
        author: "Earl",
        publishedDate: "February 03, 2026",
        category: ["school", "life"] 
    },
    {
        id: "3",
        slug: "my-third-blog",
        title: "My Third Blog",
        overview: "Welcome to my third blog",
        content: "Hello World, this is my third blog and I am so glad today.",
        author: "Earl",
        publishedDate: "February 04, 2026",
        category: ["friend"]
    }
]

export const blog_categories : Category[] = [
    {
        slug:"me",
        name: "Mylife",
        
    },

    {
        slug:"self",
        name: "self-topic",
        parent: "me"
    },

    {
        slug:"friend",
        name: "Friends",
       
    },

    {
        slug:"school",
        name: "School",
        
    },
]