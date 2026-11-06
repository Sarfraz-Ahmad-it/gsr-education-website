
import { motion } from "framer-motion";

// Course Images
import beauticianImage from "../assets/images/courses/beautician-training.png";
import mehndiImage from "../assets/images/courses/mehndi-designing.png";
import tailoringImage from "../assets/images/courses/tailoring-stitching.png";
import computerImage from "../assets/images/courses/computer-education.png";
import artsCraftsImage from "../assets/images/courses/arts-crafts.png";
import selfEmploymentImage from "../assets/images/courses/self-employment.png";
import basicEducationImage from "../assets/images/courses/basic-education.png";
import healthImage from "../assets/images/courses/health-awareness.png";

const courses = [
  {
    image: beauticianImage,
    title: "Beautician Training",
    description:
      "Develop beauty care, makeup and professional grooming skills."
  },
  {
    image: mehndiImage,
    title: "Mehndi Designing",
    description:
      "Explore traditional and creative mehndi designing skills."
  },
  {
    image: tailoringImage,
    title: "Tailoring & Stitching",
    description:
      "Learn stitching, sewing and garment-making skills."
  },
  {
    image: computerImage,
    title: "Computer Education",
    description:
      "Build basic computer knowledge and digital skills."
  },
  {
    image: artsCraftsImage,
    title: "Arts & Crafts",
    description:
      "Explore painting, embroidery, knitting and handicrafts."
  },
  {
    image: selfEmploymentImage,
    title: "Self Employment",
    description:
      "Explore small business and self-employment opportunities."
  },
  {
    image: basicEducationImage,
    title: "Basic Education",
    description:
      "Promote learning, educational awareness and knowledge."
  },
  {
    image: healthImage,
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

          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.1
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:bg-white hover:shadow-xl"
            >

              {/* Course Image */}
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">

                <h3 className="font-heading text-lg font-bold text-heading">
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

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Courses;
