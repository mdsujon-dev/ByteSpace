"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Container } from "@/components/ui/Container";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <Container className="flex items-center justify-between py-4">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-base leading-[1.6] text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/login"
            className="hidden font-body text-base leading-[1.6] text-white/90 transition-colors hover:text-white md:block"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="hidden font-body text-base leading-[1.6] text-white/90 transition-colors hover:text-white md:block"
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
          <button
            type="button"
            aria-label="Menu"
            className="text-white/90 transition-colors hover:text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </Container>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/60" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute inset-y-0 right-0 flex w-64 flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-zinc-500 hover:text-zinc-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX size={24} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-zinc-100 py-3 text-lg font-medium text-zinc-900 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/login"
                className="w-full rounded-full border border-zinc-200 px-4 py-2 text-center font-medium text-zinc-900 hover:bg-zinc-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="w-full rounded-full bg-brand-blue px-4 py-2 text-center font-medium text-white hover:bg-brand-blue/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
