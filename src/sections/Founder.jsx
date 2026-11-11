
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

import founderImage from "../assets/images/founder/gulab-bano.jpg";

import knittingCertificate from "../assets/images/founder/certificates/knitting-certificate.jpg";
import vocationalCertificate1 from "../assets/images/founder/certificates/vocational-certificate-01.jpg";
import skillIndiaCertificate from "../assets/images/founder/certificates/skill-india-certificate.jpg";
import vocationalCertificate2 from "../assets/images/founder/certificates/vocational-certificate-02.jpg";
import SewingTailoring  from "../assets/images/founder/certificates/SewingTailoring-05.jpg";
import VocationalHandicraft  from "../assets/images/founder/certificates/VocationalHandicraft-06.jpg";

const certificates = [
  {
    image: knittingCertificate,
    title: "Knitting Contest Participation",
    organization: "Vardhman – Aao Bune Knitting Contest",
    year: "2004–2005",
    description:
      "Certificate of participation in the Vardhman knitting contest.",
  },
  {
    image: vocationalCertificate1,
    title: "Vocational Training",
    organization: "District-level vocational training certificate",
    year: "2011–2012",
    description:
      "A certificate documenting participation in vocational training.",
  },
  {
    image: skillIndiaCertificate,
    title: "Assistant Dress Maker",
    organization: "Jan Shikshan Sansthan, Saharanpur",
    year: "2024",
    description:
      "105-day Apparel, Made-Ups & Home Furnishing course. Grade A.",
  },
  {
    image: vocationalCertificate2,
    title: "Vocational Training",
    organization: "Kaushal Vikas & Vocational Education",
    year: "As mentioned on certificate",
    description:
      "Certificate awarded to Gulab Bano for successfully completing vocational training under Karwan Samajik Sanstha, Saharanpur, from 1 April 2010 to 1 October 2011.",
  },
  {
    image: SewingTailoring,
    title: "Sewing & Tailoring Training Certificate",
    organization: "Karwan Samajik Sanstha, Saharanpur",
    year: "As mentioned on certificate",
    description:
      "Certificate awarded to Gulab Bano for successfully completing sewing and tailoring training conducted by the organisation.",
  },
  {
    image: VocationalHandicraft,
    title: "Vocational & Handicraft Training",
    organization: "Vocational Training and Handicraft Training Council, Saharanpur",
    year: "As mentioned on certificate",
    description:
      "Successfully completed vocational training under a community development programme, from April to October 2011.",
  },
];

function Founder() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const currentIndex = certificates.findIndex(
    (certificate) => certificate.image === selectedCertificate?.image
  );

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % certificates.length;
    setSelectedCertificate(certificates[nextIndex]);
  };

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + certificates.length) % certificates.length;
    setSelectedCertificate(certificates[previousIndex]);
  };

  return (
    <>
      <section
        id="founder"
        className="overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#722F40]/10 px-4 py-2 text-xs font-bold tracking-widest text-[#722F40] sm:text-sm">
              <HeartHandshake size={16} />
              OUR LEADERSHIP
            </span>

            <h2 className="mt-5 font-heading text-3xl font-bold text-[#252525] sm:text-4xl lg:text-5xl">
              Meet Our Founder
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              The person behind our commitment to education, awareness
              and women's skill development.
            </p>
          </motion.div>

          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid items-center gap-8 overflow-hidden rounded-3xl border border-[#E8E1D9] bg-white shadow-sm md:grid-cols-2 lg:gap-12"
          >
            {/* Founder Image */}
            <div className="relative mx-auto w-full max-w-md px-5 pt-5 md:max-w-none md:px-0 md:py-0">
              <div className="relative overflow-hidden rounded-2xl md:rounded-none md:rounded-r-2xl">
                <img
                  src={founderImage}
                  alt="Gulab Bano - Founder of G.S.R. Education"
                  loading="lazy"
                  className="aspect-[4/4] w-full object-cover object-top sm:aspect-[5/4] md:aspect-[4/5]"
                />

                <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <p className="font-heading text-lg font-bold text-[#54202E]">
                    Gulab Bano
                  </p>
                  <p className="mt-0.5 text-xs text-gray-600">
                    Founder, G.S.R. Education
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Introduction */}
            <div className="px-6 pb-8 md:px-8 md:py-10 lg:px-12">
              <span className="text-xs font-bold tracking-widest text-[#B58B45]">
                FOUNDER & LEADERSHIP
              </span>

              <h3 className="mt-3 font-heading text-2xl font-bold text-[#54202E] sm:text-3xl">
                Gulab Bano
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                Gulab Bano is the Founder of G.S.R. Education All Classes.
                She is associated with initiatives focused on promoting
                education, awareness and skill development among women.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Her documented learning background includes participation
                in a knitting contest and vocational training in apparel,
                made-ups and home furnishing, including the Assistant
                Dress Maker course. She completed a 105-day vocational
                training programme through Jan Shikshan Sansthan,
                Saharanpur, in 2024, receiving Grade A.
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Through G.S.R. Education, she works with teachers,
                members and students to reach families and encourage
                women to explore educational and vocational
                skill-development opportunities.
              </p>

              <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#FAF7F2] p-4">
                <GraduationCap
                  size={24}
                  className="mt-1 shrink-0 text-[#722F40]"
                />
                <div>
                  <h4 className="font-semibold text-[#54202E]">
                    Focused on Women's Development
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Encouraging learning, awareness and opportunities
                    for women through education and vocational skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder Message */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-10 overflow-hidden rounded-2xl bg-[#722F40] px-6 py-10 text-center shadow-lg sm:px-10 sm:py-12"
          >
            <Sparkles
              size={27}
              className="mx-auto mb-5 text-[#D6AD60]"
            />

            <p className="text-xs font-bold tracking-[0.2em] text-white/70">
              A MESSAGE FOR WOMEN
            </p>

            <h3 className="mx-auto mt-5 max-w-3xl font-heading text-2xl font-bold leading-relaxed text-white sm:text-3xl lg:text-4xl">
              महिलाओं के विकास के लिए सुनहरा मौका
            </h3>

            <p className="mt-3 font-heading text-xl font-semibold text-[#E8C77F] sm:text-2xl">
              एक कदम कामयाबी की ओर
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#D6AD60]" />

            <p className="mt-5 text-sm font-medium text-white/80">
              — Gulab Bano
            </p>
          </motion.div>

          {/* Certificates Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 mt-20 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D6AD60]/20 px-4 py-2 text-xs font-bold tracking-widest text-[#722F40]">
              <Award size={16} />
              CERTIFICATES & RECOGNITION
            </span>

            <h3 className="mt-5 font-heading text-2xl font-bold text-[#252525] sm:text-3xl lg:text-4xl">
              Learning & Achievements
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              A glimpse of certificates documenting participation
              and vocational skill development.
            </p>
          </motion.div>

          {/* Certificate Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-[#E8E1D9] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="block w-full cursor-zoom-in bg-[#F3F0EA] p-3"
                  aria-label={`View ${certificate.title}`}
                >
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-white">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-heading text-lg font-bold text-[#54202E]">
                      {certificate.title}
                    </h4>

                    <Award
                      size={20}
                      className="shrink-0 text-[#B58B45]"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {certificate.organization}
                  </p>

                  <p className="mt-3 text-xs font-semibold tracking-wide text-[#722F40]">
                    {certificate.year}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="mt-4 text-sm font-semibold text-[#722F40] underline-offset-4 hover:underline"
                  >
                    View Certificate
                    <span aria-hidden="true"> →</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous certificate"
              className="absolute left-2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-5"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.div
              key={selectedCertificate.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[90vh] max-w-5xl flex-col items-center"
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[78vh] max-w-full rounded-lg object-contain"
              />

              <p className="mt-4 text-center font-semibold text-white">
                {selectedCertificate.title}
              </p>

              <p className="mt-1 text-xs text-white/60">
                {currentIndex + 1} / {certificates.length}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next certificate"
              className="absolute right-2 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-5"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Founder;
