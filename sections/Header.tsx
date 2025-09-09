import Button from "@/components/Button";
import { Menu } from "lucide-react";
import Link from "next/link";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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

const Header = ({}: Prop) => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md">
        <div className="container px-[2rem] !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <Link href="/">
                <span className="text-xl font-semibold uppercase">
                  Tiako Loic
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-11 border border-stone-400 bg-stone-200 rounded-full inline-flex items-center justify-center">
                <Menu />
              </div>
              <Button className="!hidden !md:block">Contact Me</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
