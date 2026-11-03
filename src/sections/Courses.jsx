
import { motion } from "framer-motion";
import {
  Sparkles,
  Hand,
  Scissors,
  Monitor,
  Palette,
  BriefcaseBusiness,
  BookOpen,
  HeartPulse
} from "lucide-react";

const courses = [
  {
    icon: Sparkles,
    title: "Beautician Training",
    description:
      "Develop beauty care, makeup and professional grooming skills."
  },
  {
    icon: Hand,
    title: "Mehndi Designing",
    description:
      "Explore traditional and creative mehndi designing skills."
  },
  {
    icon: Scissors,
    title: "Tailoring & Stitching",
    description:
      "Learn stitching, sewing and garment-making skills."
  },
  {
    icon: Monitor,
    title: "Computer Education",
    description:
      "Build basic computer knowledge and digital skills."
  },
  {
    icon: Palette,
    title: "Arts & Crafts",
    description:
      "Explore painting, embroidery, knitting and handicrafts."
  },
  {
    icon: BriefcaseBusiness,
    title: "Self Employment",
    description:
      "Explore small business and self-employment opportunities."
  },
  {
    icon: BookOpen,
    title: "Basic Education",
    description:
      "Promote learning, educational awareness and knowledge."
  },
  {
    icon: HeartPulse,
    title: "Health Awareness",
    description:
      "Understand healthcare facilities and health awareness."
  }
];

function Courses() {
  return (
    <section
      id="courses"
      className="bg-white py-20 md:py-28"
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
            LEARNING & DEVELOPMENT
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            Explore Our Learning Areas
          </h2>

          <p className="mt-5 leading-8 text-muted">
            Discover different learning areas designed
            to encourage education, practical skills
            and personal development.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.1
                }}
                className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 font-heading text-lg font-bold text-heading">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {course.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore Area
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Courses;
