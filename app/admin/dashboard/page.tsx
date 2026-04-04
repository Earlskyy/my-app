"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Trash2 } from "lucide-react";
import type { ContactMessage } from "@/app/(guest)/contact/page";

export default function AdminDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin");
      return;
    }

    setIsAuthenticated(true);
    
    // Load messages immediately
    const storedMessages = localStorage.getItem("contactMessages");
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error("Error parsing messages:", error);
      }
    }
    
    setLoading(false);
  }, [router]);

  const handleDelete = (id: string) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete all messages?")) {
      setMessages([]);
      localStorage.removeItem("contactMessages");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAuthenticated || loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage contact messages
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <p className="text-sm text-muted-foreground">Total Messages</p>
            <p className="mt-2 text-3xl font-bold text-foreground">
              {messages.length}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <p className="text-sm text-muted-foreground">Latest Message</p>
            <p className="mt-2 text-sm text-foreground truncate">
              {messages.length > 0
                ? new Date(messages[messages.length - 1].timestamp).toLocaleDateString()
                : "No messages"}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <p className="text-sm text-muted-foreground">Unique Senders</p>
            <p className="mt-2 text-3xl font-bold text-foreground">
              {new Set(messages.map((m) => m.email)).size}
            </p>
          </div>
        </div>

        {/* Messages Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">
              Messages
            </h2>
            {messages.length > 0 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            )}
          </div>

          {messages.length === 0 ? (
            <div className="rounded-lg border border-border bg-background/50 p-12 text-center">
              <p className="text-muted-foreground">
                No messages yet. Contact submissions will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="rounded-lg border border-border bg-background/50 p-6 hover:bg-background/80 transition-colors space-y-3"
                >
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">
                        {message.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {message.email}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Message Content */}
                  <div className="space-y-2">
                    <p className="text-sm leading-6 text-foreground whitespace-pre-wrap">
                      {message.message}
                    </p>
                  </div>

                  {/* Timestamp */}
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      {formatDate(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
