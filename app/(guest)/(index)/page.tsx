import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between px-6">
      
      {/* HERO */}
      <section className="flex flex-1 items-center">
        <div className="max-w-xl w-full text-center space-y-6 border rounded-2xl p-10 shadow-sm">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to My Website 👋
          </h1>

          <p className="text-muted-foreground text-lg">
            This is my personal website where I share my projects, blog posts, and more.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link href="/projects">
              <Button size="lg">Get Started</Button>
            </Link>

            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
