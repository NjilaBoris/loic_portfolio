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
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-40">
          <div>One spot available for next month</div>
          <h2>Enough talk. Let&apos;s make something great together.</h2>
          <button>tiakoloic@gmail.com</button>
          <nav>
            {navItems.map(({ href, label }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="py-16">
          Copyright &copy; Tiako Loic &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
