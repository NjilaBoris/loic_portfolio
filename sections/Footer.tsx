import Button from "@/components/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Testimonials" },
  { href: "#", label: "Faqs" },
  { href: "#", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container mx-8">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-400 size-3 " />
            <span className="uppercase">One spot available for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl mt-8 font-extralight md:text-7xl lg:text-8xl">
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                variant="secondary"
                className="bg-stone-900 text-white mt-8"
                iconAfter={<ArrowUpRight />}
              >
                tiakoloic@gmail.com
              </Button>
            </div>
            <div>
              <nav className="flex flex-col gap-8 mt-16 md:items-end md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link key={label} href={href}>
                    <Button
                      variant="tertiary"
                      className="!no-underline text-lg"
                    >
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Tiako Loic &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
