"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 2 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="font-serif text-primary text-6xl font-bold">404</h1>
        <h2 className="font-sans text-text text-2xl">This page could not be found.</h2>
        <p className="font-sans text-text/70">
          Redirecting to home page...
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-sans font-semibold hover:opacity-90 transition-opacity"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
