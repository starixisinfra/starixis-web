"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const links = [
  ["Innovation", "#innovation"],
  ["Capabilities", "#capabilities"],
  ["Principles", "#principles"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <div className="shell nav-inner">
        <Brand />
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-cta" href="#contact">Start a conversation</a>
        </div>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button button-primary" href="#contact" onClick={() => setOpen(false)}>Start a conversation</a>
      </div>
    </nav>
  );
}
