
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Users,
  HeartHandshake,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Outreach team images
import teamImage1 from "../assets/images/community/outreach-team-01.jpg";
import teamImage2 from "../assets/images/community/outreach-team-02.jpg";

// Parent and student interaction images
import visitImage1 from "../assets/images/community/parent-visit-01.jpg";
import visitImage2 from "../assets/images/community/parent-visit-02.jpg";
import visitImage3 from "../assets/images/community/parent-visit-03.jpg";
import visitImage4 from "../assets/images/community/parent-visit-04.jpg";
import visitImage5 from "../assets/images/community/parent-visit-05.jpg";
import visitImage6 from "../assets/images/community/parent-visit-06.jpg";

const outreachTeams = [
  {
    image: teamImage1,
    title: "Our Outreach Team",
    description:
      "Our team members actively participate in community awareness visits.",
  },
  {
    image: teamImage2,
    title: "Working Together",
    description:
      "Team members, teachers and students working together to promote education.",
  },
];

const communityVisits = [
  {
    image: visitImage1,
    title: "Parent Interaction",
    description:
      "Connecting with parents and families to encourage educational awareness.",
  },
  {
    image: visitImage2,
    title: "Community Awareness",
    description:
      "Spreading awareness about education and skill development.",
  },
  {
    image: visitImage3,
    title: "Family Engagement",
    description:
      "Building connections with families through regular community visits.",
  },
  {
    image: visitImage4,
    title: "Education for Everyone",
    description:
      "Encouraging students and families to explore learning opportunities.",
  },
  {
    image: visitImage5,
    title: "Learning Awareness",
    description:
      "Encouraging families to understand the value of education and learning.",
  },
  {
    image: visitImage6,
    title: "Women Empowerment",
    description:
      "Creating awareness about education and skill development opportunities for women.",
  },
];

function CommunityOutreach() {
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [...outreachTeams, ...communityVisits];

  const currentIndex = allImages.findIndex(
    (item) => item.image === selectedImage?.image
  );

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
  };

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[previousIndex]);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        id="community-outreach"
        className="overflow-hidden bg-[#FAF7F2] py-16 md:py-20 lg:py-24"
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
              COMMUNITY OUTREACH
            </span>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
              Reaching Every Home,
              <span className="block text-[#722F40]">
                Inspiring Every Woman
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              G.S.R. Education regularly reaches out to families and
              communities to promote the importance of education,
              skill development and learning opportunities for women.
            </p>
          </motion.div>

          {/* Outreach Team */}
          <div className="mb-14 md:mb-20">

            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#722F40]/10 text-[#722F40]">
                <Users size={22} />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-[#252525] sm:text-2xl">
                  Our Outreach Team
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Working together for community awareness
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {outreachTeams.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group overflow-hidden rounded-2xl border border-[#E8E1D9] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="block w-full cursor-zoom-in overflow-hidden text-left"
                    aria-label={`View ${item.title}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </button>

                  <div className="p-5 sm:p-6">
                    <h4 className="font-heading text-lg font-bold text-[#54202E]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Parent and Student Visits */}
          <div>

            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D6AD60]/20 text-[#722F40]">
                <GraduationCap size={22} />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-[#252525] sm:text-2xl">
                  Family & Parent Interaction
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Connecting with families through regular visits
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {communityVisits.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-[#E8E1D9] bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="block w-full cursor-zoom-in overflow-hidden text-left"
                    aria-label={`View ${item.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-[#54202E]/0 transition-colors duration-300 group-hover:bg-[#54202E]/25">
                        <div className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white text-[#722F40] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                          <ArrowUpRight size={21} />
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="p-5">
                    <h4 className="font-heading text-lg font-bold text-[#54202E]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-2xl bg-[#722F40] px-6 py-9 text-center sm:px-10 md:mt-20 md:py-12"
          >
            <HeartHandshake
              size={32}
              className="mx-auto mb-4 text-[#D6AD60]"
            />

            <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Together, We Can Make a Difference
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              Every conversation, every visit and every effort
              brings us one step closer to a more aware and
              empowered community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-5"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.div
              key={selectedImage.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex max-h-[85vh] max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] max-w-full rounded-lg object-contain"
              />

              <p className="mt-4 text-center font-semibold text-white">
                {selectedImage.title}
              </p>

              <p className="mt-1 text-xs text-white/60">
                {currentIndex + 1} / {allImages.length}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-5"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CommunityOutreach;
