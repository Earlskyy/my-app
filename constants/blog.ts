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



export const blog_Post: BlogPost[] = [
  {
    id: "1",
    slug: "creative-journey-begins",
    title: "Where My Creative Journey Began",
    overview: "How I started exploring editing, filmmaking, and coding.",
    content: "I started my journey with simple curiosity. I tried editing small clips just for fun, not knowing it would grow into something I truly enjoy. Over time, I explored filmmaking and even web development. Each skill taught me something new, and together they shaped how I create and express ideas today.",
    author: "Earl",
    publishedDate: "February 05, 2026",
    category: ["me"]
  },
  {
    id: "2",
    slug: "learning-video-editing",
    title: "Learning the Art of Video Editing",
    overview: "My experience improving my editing skills and storytelling.",
    content: "Editing is more than just cutting clips. I learned how timing, transitions, and sound can change the emotion of a video. At first it was difficult, but as I practiced, I began to understand how to tell a story through visuals. Editing became one of my favorite creative outlets.",
    author: "Earl",
    publishedDate: "February 06, 2026",
    category: ["self", "me"]
  },
  {
    id: "3",
    slug: "filmmaking-experience",
    title: "My Filmmaking Experience",
    overview: "How filming videos changed the way I see the world.",
    content: "Filmmaking made me more aware of details like lighting, angles, and emotions. Every scene matters, and every shot tells part of a story. I started seeing everyday life differently, as if everything could become part of a film. It helped me become more creative and expressive.",
    author: "Earl",
    publishedDate: "February 07, 2026",
    category: ["friend", "life"]
  },
  {
    id: "4",
    slug: "web-development-journey",
    title: "My Web Development Journey",
    overview: "Building websites and learning how to code.",
    content: "Web development introduced me to a different kind of creativity. Writing code and building interfaces felt like creating something from nothing. It was challenging at first, but solving problems and seeing results made it worth it. It taught me patience and logical thinking.",
    author: "Earl",
    publishedDate: "February 08, 2026",
    category: ["school"]
  },
  {
    id: "5",
    slug: "balancing-life-and-creativity",
    title: "Balancing Life and Creativity",
    overview: "Managing personal life while pursuing creative passions.",
    content: "Balancing personal life with creative work is not always easy. There are times I feel unmotivated or overwhelmed. But my experiences, friends, and daily life inspire me to keep going. I continue creating, learning, and improving while enjoying the journey.",
    author: "Earl",
    publishedDate: "February 09, 2026",
    category: ["me", "life"]
  }
];

export const blog_categories: Category[] = [
    {
        slug: "me",
        name: "My Life",
    },
    {
        slug: "self",
        name: "Self-Topic",
        parent: "me"
    },
    {
        slug: "friend",
        name: "Friends",
    },
    {
        slug: "school",
        name: "School",
    },
    {
        slug: "life",
        name: "Life",
    },
];