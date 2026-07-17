"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/panchakarma", label: "Panchakarma" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cream-light border-b border-border px-[6vw] py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="no-underline !text-text-primary">
          <div className="font-heading text-[23px] leading-[1.1]">
            Dr. Archit Adhvaryu
          </div>
          <div className="text-[11px] tracking-[1.8px] uppercase text-green mt-[3px]">
            M.S. (Ayu.) · ENT &amp; Ophthalmology
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-[26px] items-center text-[15px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "!text-accent no-underline font-bold border-b-2 border-accent pb-[2px]"
                    : "!text-text-primary no-underline font-medium hover:!text-accent"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20to%20book%20an%20appointment."
            className="!bg-accent !text-white no-underline font-bold px-5 py-[10px] rounded-md text-[14.5px] hover:!bg-accent-dark"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <div className="w-[22px] flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 pt-5 pb-3 border-t border-border mt-4 text-[16px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? "!text-accent no-underline font-bold"
                    : "!text-text-primary no-underline font-medium"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/919904927676?text=Hello%20Dr.%20Archit%2C%20I%20would%20like%20to%20book%20an%20appointment."
            className="!bg-accent !text-white no-underline font-bold px-5 py-[10px] rounded-md text-[15px] text-center hover:!bg-accent-dark"
          >
            Book Appointment
          </a>
        </nav>
      )}
    </header>
  );
}
