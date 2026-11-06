
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is G.S.R. Education All Classes?",
    answer:
      "G.S.R. Education All Classes is an initiative associated with Alpsankhyak Mahila Vikas Samiti, Saharanpur, Uttar Pradesh. Its objectives focus on promoting education, skill development and opportunities for personal and professional growth.",
  },
  {
    question: "What is the main objective of the Samiti?",
    answer:
      "The main objectives include spreading educational awareness, supporting women's empowerment, encouraging vocational skills and creating awareness about opportunities for self-employment and personal development.",
  },
  {
    question: "Which learning areas does the institution focus on?",
    answer:
      "The stated learning areas include computer education, tailoring, embroidery, beautician skills, fashion designing, painting, mehndi, cooking, health awareness and other vocational activities.",
  },
  {
    question: "Are vocational skill development activities available?",
    answer:
      "Vocational skill development is one of the Samiti's stated objectives. Please contact the institution directly to confirm which activities or training programmes are currently available.",
  },
  {
    question: "How does the institution support women's empowerment?",
    answer:
      "The Samiti aims to encourage women's education, practical skills, self-employment awareness and participation in income-generating activities to support greater independence and confidence.",
  },
  {
    question: "Can I get information about computer education?",
    answer:
      "Computer education and digital skills are among the stated learning objectives. Contact the institution to ask about current programme availability and further details.",
  },
  {
    question: "What are the course fees and timings?",
    answer:
      "Fees, schedules and programme details may depend on the activity being offered. Please contact the institution directly for the latest confirmed information.",
  },
  {
    question: "How can I contact G.S.R. Education All Classes?",
    answer:
      "You can contact the institution by phone or WhatsApp using the contact details provided in the Contact Us section of this website.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background text-primary">
              <HelpCircle size={30} />
            </div>
          </div>

          <span className="text-sm font-bold tracking-widest text-primary">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            Got Questions? We Have Answers.
          </h2>

          <p className="mt-5 leading-8 text-muted">
            Find answers to common questions about our
            institution, educational objectives and
            skill development initiatives.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-primary/30 bg-background"
                      : "border-border bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  >
                    <span
                      className={`text-sm font-semibold leading-7 md:text-base ${
                        isOpen ? "text-primary" : "text-heading"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-background text-primary"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={19} />
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6">
                          <div className="border-t border-border pt-4">
                            <p className="text-sm leading-7 text-muted md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl bg-background p-6 text-center md:p-8"
        >
          <h3 className="font-heading text-xl font-bold text-heading md:text-2xl">
            Still Have Questions?
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted">
            Feel free to contact us for more information
            about our institution and initiatives.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;
