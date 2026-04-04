import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
] as const;

const blogLinks = [
  { href: "/blog", label: "All posts" },
  { href: "/blog/category/tech", label: "Tech" },
  { href: "/blog/category/design", label: "Design" },
] as const;

const contactLinks = [
  { href: "tel:09519312028", label: "Phone: 09519312028" },
  { href: "mailto:earlstevenjpacaldo@gmail.com", label: "Email" },
  { href: "https://github.com/Earlskyy", label: "Github" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
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
               <p className="text-xs sm:text-sm text-muted-foreground">
                Cebu, Philippines
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">Blog</h3>
            <ul className="space-y-2">
              {blogLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-foreground">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}