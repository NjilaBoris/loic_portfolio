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
      <header>
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <Link href="/">
                <span className="text-xl font-bold">Tiako Loic</span>
              </Link>
            </div>
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
