
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    title: "Educational Activities",
    category: "EDUCATION",
    description:
      "Encouraging learning, knowledge and educational awareness.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85"
  },
  {
    title: "Beauty & Makeup",
    category: "BEAUTY SKILLS",
    description:
      "Exploring beauty care, makeup and practical grooming skills.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=85"
  },
  {
    title: "Mehndi Designing",
    category: "CREATIVE SKILLS",
    description:
      "Showcasing traditional mehndi art and creative designs.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85"
  },
  {
    title: "Tailoring & Stitching",
    category: "VOCATIONAL SKILLS",
    description:
      "Promoting stitching, sewing and garment-making skills.",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=900&q=85"
  }
];

function Activities() {
  return (
    <section
      id="activities"
      className="bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold tracking-widest text-primary">
            OUR ACTIVITIES
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            Learning Beyond Classrooms
          </h2>

          <p className="mt-5 leading-8 text-muted">
            Discover different areas of learning,
            creativity and practical skill development.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-[10px] font-bold tracking-wider text-primary">
                  {activity.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-heading">
                    {activity.title}
                  </h3>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {activity.description}
                </p>
              </div>

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Activities;
