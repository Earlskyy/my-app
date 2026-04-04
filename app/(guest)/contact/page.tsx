"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Twitter, Facebook } from "lucide-react";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create message object
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };

    // Get existing messages from localStorage
    const existingMessages = localStorage.getItem("contactMessages");
    const messages: ContactMessage[] = existingMessages ? JSON.parse(existingMessages) : [];

    // Add new message
    messages.push(newMessage);

    // Save to localStorage
    localStorage.setItem("contactMessages", JSON.stringify(messages));

    console.log("Message saved:", newMessage);
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Contact Me
          </h1>
          <div className="mx-auto w-24 border-t-2 border-primary" />
        </div>

        {/* Contact Form Section */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={6}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitted}
                className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Image/Visual */}
          <div className="flex items-center justify-center">
            <div className="aspect-square w-full max-w-sm overflow-hidden rounded-3xl border-2 border-border shadow-sm">
              <Image
                src="/contactpic.jpg"
                alt="Contact Picture"
                width={500}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Contact Information Bars */}
        <div className="space-y-3">
          {/* Email Bar */}
          <a
            href="mailto:earlstevenjpacaldo@gmail.com"
            className="block"
          >
            <div className="flex items-center justify-center gap-4 rounded-lg bg-foreground px-6 py-4 text-background transition-opacity hover:opacity-90">
              <Mail className="h-5 w-5 shrink-0" />
              <span className="text-sm font-medium">earlstevenjpacaldo@gmail.com</span>
            </div>
          </a>

          {/* Phone Bar */}
          <a
            href="tel:09519312028"
            className="block"
          >
            <div className="flex items-center justify-center gap-4 rounded-lg bg-foreground px-6 py-4 text-background transition-opacity hover:opacity-90">
              <Phone className="h-5 w-5 shrink-0" />
              <span className="text-sm font-medium">09519312028</span>
            </div>
          </a>

          {/* Social Links Bar */}
          <div className="flex items-center justify-center gap-8 rounded-lg bg-foreground px-6 py-4 text-background">
            <a href="mailto:earlstevenjpacaldo@gmail.com" className="transition-transform hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:09519312028" className="transition-transform hover:scale-110">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://github.com/Earlskyy" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://x.com/earlyyy0323" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://web.facebook.com/earlsteven.pacaldo.3" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
