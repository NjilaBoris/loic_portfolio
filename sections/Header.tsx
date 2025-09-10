"use client";
import Button from "@/components/Button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { hash } from "crypto";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
interface Prop {
  label: string;
  href: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  useEffect(() => {
    if (isOpen) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      navAnimate(navScope.current, { height: 0 });
    }
  }, [isOpen, navAnimate, navScope]);
  const handleClickMobileItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <header>
        <div
          className="fixed top-0 left-0 w-full h-0 overflow-clip bg-stone-900"
          ref={navScope}
        >
          <nav className="mt-20 flex flex-col">
            {navItems.map(({ label, href }: Prop) => (
              <Link
                href={href}
                key={label}
                onClick={handleClickMobileItem}
                className="text-stone-200 relative border-t isolate py-8 last:border-b border-stone-800 group/nav-item"
              >
                <div className="container !max-w-full px-5 flex items-center justify-between">
                  <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                    {label}
                  </span>
                  <ArrowUpRight />
                </div>
                <div className="absolute w-full h-0 bottom-0 bg-stone-800 -z-10 group-hover/nav-item:h-full transition-all duration-500" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md ">
          <div className="container px-[2rem] !max-w-full">
            <div className="flex justify-between h-20 items-center">
              <div>
                <Link href="/">
                  <span className="text-xl  font-semibold uppercase text-white">
                    Tiako Loic
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full">
          <div className="container px-[2rem] !max-w-full">
            <div className="flex justify-end h-20 items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsOpen((open) => !open)}
                  className="size-11 cursor-pointer border border-stone-400 bg-stone-200 rounded-full inline-flex items-center justify-center"
                >
                  {isOpen ? <X /> : <Menu />}
                </button>
                <Button className="!hidden md:flex!">Contact Me</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
