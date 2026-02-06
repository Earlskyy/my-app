import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "This is my first project description.",
    image: "https://avatar.vercel.sh/shadcn1",
    featured: true,
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "This is my second project description.",
    image: "https://avatar.vercel.sh/shadcn2",
    featured: true,
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "This is my third project description.",
    image: "https://avatar.vercel.sh/shadcn3",
    featured: false,
  },
  // add more projects here 👀
]

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          A collection of things I’ve built and worked on.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group relative overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 z-10 bg-black/40 transition group-hover:bg-black/25" />
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover"
              />
            </div>

            {/* Content */}
            <CardHeader>
              {project.featured && (
                <CardAction>
                  <Badge variant="secondary">Featured</Badge>
                </CardAction>
              )}
              <CardTitle className="leading-tight">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
