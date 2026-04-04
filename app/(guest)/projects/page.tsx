"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";

const categories = [
  "All",
  ...Array.from(new Set(PROJECTS.map((project) => project.category).filter(Boolean))),
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter((project) => {
        const query = searchQuery.toLowerCase();
        const text = [project.title, project.description, project.category]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        const matchesSearch = text.includes(query);
        const matchesCategory =
          activeCategory === "All" || project.category === activeCategory;

        return matchesSearch && matchesCategory;
      }),
    [searchQuery, activeCategory]
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <div className="rounded-3xl border border-border bg-background/80 p-6 shadow-sm shadow-slate-900/5">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                Projects
              </div>
              <div className="max-w-2xl space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  My Projects
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground">
                  A curated selection of websites, web apps, and tools built to solve real problems and bring ideas to life.
                </p>
              </div>
            </div>

            <div className="w-full max-w-md">
              <label htmlFor="project-search" className="sr-only">
                Search projects
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="project-search"
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects"
                  className="w-full rounded-full border border-border bg-transparent py-4 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full px-4"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
 