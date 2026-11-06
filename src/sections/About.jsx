
import { motion } from "framer-motion";
import { BookOpen, Users, BriefcaseBusiness, HeartHandshake } from "lucide-react";
import aboutImage from "../assets/images/about-institution.png";
const focusAreas = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Promoting education and awareness."
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Creating opportunities for women."
  },
  {
    icon: BriefcaseBusiness,
    title: "Skill Development",
    description: "Encouraging practical and vocational skills."
  },
  {
    icon: HeartHandshake,
    title: "Self Employment",
    description: "Supporting opportunities for independent livelihoods."
  }
];

function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:grid-cols-2 md:px-8">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
          src={aboutImage}
          alt="Women learning and developing practical skills"
          className="h-full w-full rounded-3xl object-cover"
        />

          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-primary p-5 text-white shadow-xl sm:-right-5">
            <p className="font-heading text-2xl font-bold">
              Learn
            </p>
            <p className="text-sm text-white/80">
              Grow & Empower
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-bold tracking-widest text-primary">
            ABOUT OUR INSTITUTION
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-heading md:text-5xl">
            Creating Opportunities Through{" "}
            <span className="text-primary">Education</span>
          </h2>

          <p className="mt-6 leading-8 text-muted">
            Alpsankhyak Mahila Vikas Samiti is a
            charitable organisation focused on
            promoting education, skill development
            and employment opportunities.
          </p>

          <p className="mt-4 leading-8 text-muted">
            Our objectives include encouraging
            women and communities to develop
            practical skills, improve access to
            education and work towards a more
            independent future.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
