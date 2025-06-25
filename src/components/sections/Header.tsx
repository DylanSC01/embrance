import { useState } from "react";
import { X, Menu } from "lucide-react";
import clsx from "clsx";

import { HeaderNavList } from "@/components/ui";
import useStickyHeader from "@/hooks/useStickyHeader";
import { headerLinks } from "@/data/data";

export const Header = () => {
  const isSticky = useStickyHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b-2 border-solid border-gray-200 transition-colors duration-300",
        isSticky
          ? "bg-primary shadow-md border-gray-300"
          : "bg-white border-gray-200"
      )}
    >
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <div className={clsx("p-2 rounded-full", isSticky && "bg-white")}>
          <img
            src="/images/logo.png"
            alt="Embrance logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className={clsx("hidden lg:block", isSticky && "!text-white")}>
          <HeaderNavList headerLinks={headerLinks} />
        </div>

        {/* Desktop CTA */}
        <a
          href=""
          className={clsx(
            "btn hidden lg:block",
            isSticky && "!bg-white !text-primary"
          )}
        >
          Book a Call
        </a>

        {/* Mobile Menu Button */}
        <button
          className={clsx("lg:hidden p-2", isSticky && "text-white")}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-9 w-9" />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={clsx(
          "fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b-2 border-solid border-gray-200">
          <img src="/images/logo.png" alt="Embrance logo" className="h-8" />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="p-6">
          <HeaderNavList headerLinks={headerLinks} />
          <a href="#" className="btn mt-6 block text-center">
            Book a Call
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </header>
  );
};
