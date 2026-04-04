import { WHAT_I_DO_SERVICES } from "@/constants/WhatIDo";

export function WhatIDo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I Do
          </h2>
          <div className="w-16 border-t-2 border-primary" />
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {WHAT_I_DO_SERVICES.map((service, index) => (
            <div
              key={index}
              className="flex gap-6"
            >
              {/* Timeline Circle */}
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                {/* Line */}
                {index < WHAT_I_DO_SERVICES.length - 1 && (
                  <div className="mt-2 h-12 w-1 bg-gradient-to-b from-primary to-primary/20" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2 pt-1 pb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
