import Link from "next/link";
import {Button} from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header () {
    return (
        <header>
            <div className="container mx-auto py-6">
                <div className="flex items-center justify-between">
                {/* Logo*/}
                <div className="font-bold text-xl">
                    <h1><Link href="/">MyWebsite</Link></h1>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6 items-center">
                     <li><Link href="/">Home</Link></li>
                     <li><Link href="/about">About</Link></li>
                     <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link href="#myfooter">
                    <Button>Contact</Button>
                    </Link>
                </div>
            </div>
            </div>
        </header>
    )
}