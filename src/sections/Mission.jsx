
import { motion } from "framer-motion";

// Import Mission Images
import educationImage from "../assets/images/mission/education-awareness.png";
import vocationalImage from "../assets/images/mission/vocational-skills.png";
import beautyImage from "../assets/images/mission/personal-care.png";
import employmentImage from "../assets/images/mission/employment-opportunities.png";
import digitalImage from "../assets/images/mission/digital-skills.png";
import healthImage from "../assets/images/mission/health-wellbeing.png";

const objectives = [
  {
    image: educationImage,
    title: "Education & Awareness",
    description:
      "Promoting education and creating awareness about the importance of learning."
  },
  {
    image: vocationalImage,
    title: "Vocational Skills",
    description:
      "Encouraging tailoring, stitching, embroidery, knitting and handicraft skills."
  },
  {
    image: beautyImage,
    title: "Beauty & Personal Care",
    description:
      "Promoting beautician training, mehndi designing and beauty-related skills."
  },
  {
    image: employmentImage,
    title: "Employment Opportunities",
    description:
      "Encouraging self-employment, small businesses and cottage industries."
  },
  {
    image: digitalImage,
    title: "Digital Skills",
    description:
      "Promoting computer education and digital skill development."
  },
  {
    image: healthImage,
    title: "Health & Well-being",
    description:
      "Creating awareness about healthcare facilities and health services."
  }
];

function Mission() {
  return (
    <section
      id="mission"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold tracking-widest text-primary">
            OUR MISSION
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            Our Mission & Objectives
          </h2>

          <p className="mt-5 leading-8 text-muted">
            We aim to create meaningful opportunities
            through education, practical skills,
            awareness and empowerment.
          </p>
        </motion.div>

        {/* Objective Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
            >

              {/* Card Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-7">
                <h3 className="font-heading text-xl font-bold text-heading">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Mission;