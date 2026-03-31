"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Check" },
  { href: "/progress", label: "Progress" },
  { href: "/about", label: "About" }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" aria-label="Bottom navigation">
      {ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            className={`nav-item ${active ? "nav-item-active" : ""}`}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
