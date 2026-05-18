"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Продукты", href: "#products" },
    { label: "О бренде", href: "#solution" },
    { label: "Для партнёров", href: "#partners" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.35s, box-shadow 0.35s",
        background: scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: scrolled ? "0 1px 24px rgba(5,47,131,0.09)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between" style={{ height: 68 }}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <svg width="56" height="26" viewBox="0 0 56 26" fill="none">
              <text
                x="0" y="22"
                fontFamily="Manrope, Century Gothic, Avenir, sans-serif"
                fontWeight="800"
                fontSize="24"
                fill="#052F83"
                letterSpacing="-0.5"
              >KDA</text>
            </svg>
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="text-[9px] font-bold tracking-[0.15em] uppercase" style={{ color: "var(--neutral-400)" }}>Key Dental</span>
              <span className="text-[9px] font-bold tracking-[0.15em] uppercase" style={{ color: "var(--neutral-400)" }}>Advantage</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide transition-colors duration-200"
                style={{ color: "var(--neutral-600)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--brand)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-600)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#partners"
              className="text-sm font-bold tracking-wide transition-colors duration-200"
              style={{ color: "var(--brand)" }}
            >
              Партнёрам
            </a>
            <a
              href="#products"
              className="btn-primary inline-flex items-center px-6 py-2.5 text-sm tracking-wide"
            >
              Купить
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#products" className="btn-primary inline-flex items-center px-5 py-2.5 text-sm">
              Купить
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 transition-colors"
              style={{ color: "var(--neutral-600)" }}
              aria-label="Меню"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 py-5 flex flex-col gap-5 border-t"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderColor: "var(--neutral-200)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold transition-colors"
              style={{ color: "var(--neutral-700, #374151)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partners"
            onClick={() => setMenuOpen(false)}
            className="text-base font-bold"
            style={{ color: "var(--brand)" }}
          >
            Партнёрам →
          </a>
        </div>
      )}
    </header>
  );
}
