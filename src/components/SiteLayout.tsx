import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logo from "@/assets/logo-gm.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/year-in-review", label: "Year in Review" },
  { to: "/ongoing", label: "Ongoing" },
  { to: "/psa", label: "PSA" },
  { to: "/donate", label: "Donate" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });


  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Getting Mobile" width={1248} height={222} className="h-10 sm:h-11 w-auto transition-transform group-hover:scale-[1.03]" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                    active ? "bg-secondary text-secondary-foreground" : "text-foreground/75 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/donate"
            className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm shadow-pop hover:scale-105 transition-transform"
          >
            Donate →
          </Link>
        </div>
        <nav className="md:hidden flex gap-1 overflow-x-auto px-5 pb-3">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  active ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>


      <footer className="bg-secondary text-secondary-foreground mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 bg-white/5 rounded-xl p-2 inline-block">
              <img src={logo} alt="Getting Mobile" width={1248} height={222} className="h-10 w-auto" />
            </div>
            <p className="text-sm text-secondary-foreground/75 max-w-xs">
              Helping kids defeat obesity through exercise and nutrition — building lifelong habits, one community at a time.
            </p>
          </div>

          <div>
            <div className="font-display text-sm tracking-widest text-primary mb-4">EXPLORE</div>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-secondary-foreground/80 hover:text-primary">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-sm tracking-widest text-primary mb-4">CONTACT</div>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Mobile, Alabama</li>
              <li>hello@gettingmobile.org</li>
              <li>Founded 2026 · Ariel Rismany, Ariel Danialian, Ethan Shipkevich</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} Getting Mobile. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
