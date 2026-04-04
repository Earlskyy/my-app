import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/common/Section";

export function Hero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Left Text Column */}
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-wide leading-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Hey, I'm Earl
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A Full Stack Developer who enjoys building simple, beautiful, and intuitive digital experiences.

                        I specialize in developing modern web applications and occasionally designing clean user interfaces that prioritize usability and elegance.

                        Beyond coding, I'm also passionate about video editing, filmmaking, and videography, combining creativity and technology to tell compelling visual stories.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/projects">
                        <Button size="lg" className="group w-full lg:w-auto">
                            Check out my work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full lg:w-auto">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                    <a href="https://github.com/Earlskyy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
        
                    <a href="mailto:earlstevenjpacaldo@gmail.com" className="hover:text-foreground transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>

            {/* Right Image Column */}
            <div className="flex justify-center items-center relative mt-8 lg:mt-0">
                
                {/* Gradient Glow Background */}
                <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-400/30 blur-3xl rounded-full animate-pulse"></div>

                {/* Floating Icons */}
                <Github className="absolute top-8 sm:top-12 left-4 sm:left-6 h-6 sm:h-8 w-6 sm:w-8 text-muted-foreground animate-float" />
                <Linkedin className="absolute bottom-8 sm:bottom-16 right-4 sm:right-10 h-6 sm:h-8 w-6 sm:w-8 text-muted-foreground animate-float delay-200" />
                <Mail className="absolute top-16 sm:top-24 right-4 sm:right-6 h-6 sm:h-8 w-6 sm:w-8 text-muted-foreground animate-float delay-500" />

                {/* Main Circle */}
                <div className="relative flex items-end justify-center w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-br from-muted via-muted/70 to-muted/40 border border-border shadow-[0_20px_80px_rgba(0,0,0,0.2)]">

                    {/* Decorative Rotating Ring */}
                    <div className="absolute inset-0 flex items-end justify-center w-full h-full rounded-full 
                        bg-gradient-to-br from-teal-100 via-blue-200 to-gray-300"></div>

                    {/* Profile Image */}
                    <img
                        src="/profilepic2.png"
                        alt="Earl"
                        className="absolute inset-0 m-auto max-w-full max-h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                    />

                </div>

            </div>
        </Section>
    );
}