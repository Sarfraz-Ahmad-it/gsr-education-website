
import { ArrowUp, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import logo from "../../assets/images/optimized/logo_gsr.webp";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Mission", href: "#mission" },
  { name: "Learning Areas", href: "#courses" },
  { name: "Activities", href: "#activities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

const contactNumbers = [
  "7830170699"
];

// Confirm this is the institution's official WhatsApp number.
const whatsappNumber = "917830170699";

const address =
  "Nishat Colony, Habibgarh Road, Saharanpur, Uttar Pradesh, India";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

function Footer() {
  return (
    <footer className="bg-[#24151A] text-white">

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 w-fit">
              <img
                src={logo}
                alt="G.S.R. Education All Classes"
                className="h-14 w-14 rounded-lg object-contain"
              />

              <div>
                <span className="font-heading text-2xl font-bold">
                  G.S.R.
                </span>

                <p className="text-[10px] font-semibold tracking-widest text-white/60">
                  EDUCATION ALL CLASSES
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
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
                  className="w-fit text-sm text-white/60 transition-colors duration-300 hover:translate-x-1 hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-xl font-bold">
              Contact Information
            </h3>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-start gap-3 text-sm leading-7 text-white/60 transition-colors hover:text-accent"
            >
              <MapPin size={19} className="mt-1 shrink-0" />
              <span>{address}</span>
            </a>

            <div className="mt-5 flex items-start gap-3">
              <Phone size={19} className="mt-1 shrink-0 text-white/70" />

              <div className="flex flex-col gap-3">
                {contactNumbers.map((number) => (
                  <a
                    key={number}
                    href={`tel:+91${number}`}
                    className="w-fit text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    +91 {number}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-heading text-xl font-bold">
              Connect With Us
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Have questions about our institution?
              Get in touch with us directly.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1DA851] hover:shadow-lg sm:w-fit"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <p className="mt-4 text-xs leading-6 text-white/40">
              We look forward to hearing from you.
            </p>
          </div>

        </div>
        
        {/* Bottom Footer */}
        <div className="mt-14 border-t border-white/10 pt-7">

          <div className="grid grid-cols-1 items-center gap-6 text-center sm:grid-cols-3 sm:text-left">

            {/* Copyright */}
            <p className="text-xs leading-6 text-white/50">
              © {new Date().getFullYear()} G.S.R. Education All Classes.
              All rights reserved.
            </p>

            {/* Website Credits */}
            <div className="flex flex-col items-center gap-2 text-xs leading-5">

              <p className="text-white/70">
                Designed & Developed by{" "}
                <span className="font-semibold text-white">
                  Indian Industries
                </span>
              </p>

               <p className="text-white/50">
                  CEO: Mohammad Ather
                </p>

                <div className="flex flex-wrap items-center gap-1 text-white/50">
                  <a href="tel:+919762575567" className="hover:text-accent transition-colors">
                    📞 +91 97625 75567
                  </a>

                  <span className="text-white/40">|</span>
                      
                  <a href="mailto:athertanveer6@gmail.com" className="hover:text-accent transition-colors">
                  ✉️ athertanveer6@gmail.com
                  </a>
                </div>

            </div>

            {/* Back to Top */}
            <div className="flex justify-center sm:justify-end">
              <a
                href="#home"
                aria-label="Back to top"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-primary"
              >
                <ArrowUp size={19} />
              </a>
            </div>

          </div>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
