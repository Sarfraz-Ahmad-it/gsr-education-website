
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

const contactNumbers = [
  "8171225629",
  "6399556530",
  "9720036735",
];

// Primary contact number for WhatsApp.
// Confirm with the client before publishing.
const whatsappNumber = "917830170699";

const address =
  "Nishat Colony, Habibgarh Road, Saharanpur, Uttar Pradesh, India";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold tracking-widest text-primary">
            GET IN TOUCH
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mt-5 leading-8 text-muted">
            Have questions about our institution and
            learning initiatives? Feel free to contact us.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-primary p-7 text-white md:p-10"
          >
            <h3 className="font-heading text-3xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-white/75">
              We welcome enquiries about our institution,
              educational objectives and skill development
              initiatives.
            </p>

            {/* Address */}
            <div className="mt-10 flex gap-4">
              <MapPin className="shrink-0" size={24} />

              <div>
                <h4 className="font-semibold">Our Address</h4>

                <p className="mt-2 text-sm leading-7 text-white/75">
                  {address}
                </p>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  View on Google Maps
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mt-8 flex gap-4">
              <Phone className="shrink-0" size={24} />

              <div>
                <h4 className="font-semibold">Contact Numbers</h4>

                <div className="mt-2 flex flex-col gap-3">
                  {contactNumbers.map((number) => (
                    <a
                      key={number}
                      href={`tel:+91${number}`}
                      className="w-fit text-sm text-white/75 transition-colors hover:text-accent"
                    >
                      +91 {number}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6 rounded-3xl border border-border bg-white p-7 md:p-10"
          >
            <div>
              <span className="text-sm font-bold tracking-widest text-primary">
                CONNECT WITH US
              </span>

              <h3 className="mt-4 font-heading text-3xl font-bold text-heading">
                Let's Build a Better Future Together
              </h3>

              <p className="mt-5 leading-8 text-muted">
                For information about the institution
                and its initiatives, contact us directly.
              </p>
            </div>

            {/* Call Button */}
            <a
              href="tel:+918171225629"
              className="flex items-center justify-between gap-4 rounded-xl bg-primary px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg"
            >
              <span className="flex items-center gap-3">
                <Phone size={21} />
                <span className="font-semibold">Call Us</span>
              </span>

              <ArrowUpRight size={19} />
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-border px-6 py-4 text-heading transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={21} className="text-primary" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </span>

              <ArrowUpRight size={19} />
            </a>

            {/* Directions Button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-border px-6 py-4 text-heading transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <Navigation size={21} className="text-primary" />
                <span className="font-semibold">Get Directions</span>
              </span>

              <ArrowUpRight size={19} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
