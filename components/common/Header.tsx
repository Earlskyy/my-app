"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">

      {/* Top Bar */}
      <div className="relative z-10 container mx-auto flex h-14 items-center justify-between gap-4 bg-background px-4 sm:px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
  <Image
    src="/ownlogofinal.png"
    alt="ESP Logo"
    width={40}
    height={40}
    className="h-12 w-auto"
  />

  <div className="flex flex-col leading-tight">
    <Link
      href="/"
      className="font-bold text-lg sm:text-xl md:text-2xl text-foreground"
    >
      Earl Steven Pacaldo
    </Link>

    <p className="text-xs sm:text-sm text-muted-foreground">
      Web Developer
    </p>
  </div>
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <ul className="flex items-center gap-2 lg:gap-4">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${isActive
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Burger Button (Mobile) */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 top-14 left-0 right-0 bottom-0 z-0 bg-black/50 backdrop-blur-sm"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden relative z-10 border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}