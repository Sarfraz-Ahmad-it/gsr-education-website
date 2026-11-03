
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight
} from "lucide-react";

const contactNumbers = [
  "8171225629",
  "6399556530",
  "9720036735"
];

function Contact() {
  return (
    <section
      id="contact"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
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
            Have questions about education and skill
            development? Contact us to learn more.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-primary p-7 text-white md:p-10"
          >
            <h3 className="font-heading text-3xl font-bold">
              Get in Touch
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
                <h4 className="font-semibold">
                  Our Address
                </h4>

                <p className="mt-2 text-sm leading-7 text-white/75">
                  Nishat Colony, Habibgarh Road,
                  Saharanpur, Uttar Pradesh, India.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-8 flex gap-4">
              <Phone className="shrink-0" size={24} />

              <div>
                <h4 className="font-semibold">
                  Contact Numbers
                </h4>

                <div className="mt-2 flex flex-col gap-2">
                  {contactNumbers.map((number) => (
                    <a
                      key={number}
                      href={`tel:${number}`}
                      className="w-fit text-sm text-white/75 transition-colors hover:text-accent"
                    >
                      +91 {number}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email placeholder */}
            <div className="mt-8 flex gap-4">
              <Mail className="shrink-0" size={24} />

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <p className="mt-2 text-sm text-white/75">
                  Email details will be updated soon.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center rounded-3xl border border-border bg-white p-7 md:p-10"
          >
            <span className="text-sm font-bold tracking-widest text-primary">
              CONNECT WITH US
            </span>

            <h3 className="mt-4 font-heading text-3xl font-bold text-heading">
              Let's Build a Better Future Together
            </h3>

            <p className="mt-5 leading-8 text-muted">
              For information about the institution
              and its initiatives, please contact
              us using the details provided.
            </p>

            <a
              href="tel:8171225629"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg"
            >
              Call Us
              <ArrowUpRight size={18} />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
