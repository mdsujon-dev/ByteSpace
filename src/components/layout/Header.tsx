"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { MdOutlineShoppingBag } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-blue" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-sm text-white/90 transition-colors hover:text-white"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="text-white/90 transition-colors hover:text-white"
          >
            <MdOutlineShoppingBag size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
