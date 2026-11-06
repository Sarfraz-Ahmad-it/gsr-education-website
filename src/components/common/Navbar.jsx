
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/images/logo_gsr.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Activities", href: "#activities" },
  { name: "Gallery", href: "#gallery" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">

        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="G.S.R. Logo"
            className="h-12 w-12 rounded-lg object-contain"
          />

          <div>
            <h2 className="font-heading text-xl font-bold text-primary">
              G.S.R.
            </h2>
            <p className="text-[10px] font-semibold tracking-wider text-muted">
              EDUCATION ALL CLASSES
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-heading transition-colors duration-300 hover:text-primary"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-background md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full overflow-hidden border-t border-border bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-border py-3 text-sm font-medium text-heading transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navbar;
