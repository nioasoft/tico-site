"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-label="פתח תפריט"
        aria-expanded={open}
        className="w-10 h-10 inline-flex items-center justify-center rounded border border-foreground/20"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`}></span>
          <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
        </div>
      </button>
      <div
        className={`fixed inset-x-0 top-20 z-50 border-t border-b border-foreground/10 bg-white transition-all duration-300 ease-out overflow-hidden ${
          open ? "opacity-100 translate-y-0 max-h-[50vh]" : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="container">
          <nav className="mx-auto max-w-4xl px-2 py-3 flex flex-col gap-2 text-foreground text-right">
            <Link href="/" className="py-2" onClick={() => setOpen(false)}>בית</Link>
            <Link href="/about" className="py-2" onClick={() => setOpen(false)}>הראש של תיקו</Link>
            <Link href="/services" className="py-2" onClick={() => setOpen(false)}>הכלים שלנו</Link>
            <Link href="/contact" className="py-2" onClick={() => setOpen(false)}>צור קשר</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}


