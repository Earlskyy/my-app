import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 py-16 sm:px-12 sm:py-20">
        {/* Background Accent */}
        <div className="absolute right-0 top-0 -z-10 h-full w-1/3 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-background/20" />
        </div>

        {/* Content */}
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Want to reach me?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
              I'm always open to new opportunities, collaborations, and discussions about web development, design and video editing.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
