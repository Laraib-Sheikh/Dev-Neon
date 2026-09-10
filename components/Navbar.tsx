"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b hairline sticky top-0 z-40 bg-paper/85 backdrop-blur-md">
      <div className="max-w-wrap mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
          aria-label="Dev Neon home"
        >
          <Logo
            size={34}
            className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-semibold text-[1.1rem] tracking-tight">
            Dev Neon
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.9rem] transition-colors relative ${
                pathname === link.href
                  ? "text-ink font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-green after:rounded-full"
                  : "text-soft hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[0.875rem] font-medium bg-green text-paper px-4 py-2 rounded-md hover:bg-green-deep transition-all hover:shadow-lift hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-5 h-[1.5px] bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t hairline px-6 py-4 flex flex-col gap-4 bg-paper">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[0.95rem] text-soft"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-[0.9rem] font-medium bg-green text-paper px-4 py-2.5 rounded-md text-center"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
