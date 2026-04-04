
"use client";

import { EXPERIENCES } from "@/constants/about";

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-20">
        {/* Hero Section */}
        <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-sm shadow-slate-900/5 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            {/* Profile Image */}
            <div className="flex flex-col items-center gap-4">
              <div className="aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-primary/10 to-background shadow-sm">
                <img
                  src="/aboutpicfinal.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-foreground">Earl Steven J. Pacaldo</h2>
                <p className="text-sm text-muted-foreground">August 01, 2002</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                About
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Get to know me
                </h1>
                <p className="text-base leading-7 text-muted-foreground">
                  I'm a passionate full-stack developer with a love for creating beautiful, functional web applications. With expertise in modern JavaScript frameworks, I focus on delivering clean code and exceptional user experiences.
                </p>
                <p className="text-base leading-7 text-muted-foreground">
                  Beyond coding, I'm constantly learning, exploring new technologies, and contributing to the developer community through open-source projects and mentoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative space-y-12 lg:space-y-20">
            {/* Vertical line background */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20 lg:left-1/2 lg:-translate-x-1/2" />

            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className={`relative flex gap-8 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 z-10 h-5 w-5 rounded-full border-2 border-primary bg-background shadow-md lg:left-1/2 lg:-translate-x-1/2 lg:top-6" />

                {/* Content Box */}
                <div className="flex-1 pt-1 pl-16 lg:pl-0">
                  <div className="rounded-2xl border border-border bg-background/50 p-6 hover:bg-background/80 transition-colors h-full">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          {exp.year}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-sm text-muted-foreground">
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
