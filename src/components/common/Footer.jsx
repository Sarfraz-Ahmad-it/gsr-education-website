
import { ArrowUp, GraduationCap } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Mission", href: "#mission" },
  { name: "Learning Areas", href: "#courses" },
  { name: "Activities", href: "#activities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" }
];

function Footer() {
  return (
    <footer className="bg-[#24151A] text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                <GraduationCap size={27} />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold">
                  G.S.R.
                </h2>

                <p className="text-[10px] tracking-widest text-white/60">
                  EDUCATION ALL CLASSES
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Promoting education, skill development
              and opportunities for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-bold">
              Contact Information
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Nishat Colony, Habibgarh Road,
              Saharanpur, Uttar Pradesh, India.
            </p>

            <a
              href="tel:8171225629"
              className="mt-4 inline-block text-sm text-white/70 transition-colors hover:text-accent"
            >
              +91 8171225629
            </a>
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">

          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} G.S.R. Education.
            All rights reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-accent hover:text-primary"
          >
            <ArrowUp size={19} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
