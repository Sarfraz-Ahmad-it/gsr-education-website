
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "../assets/images/hero-education.png";

function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-background"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary">
            EDUCATION • SKILLS • EMPOWERMENT
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
            Empowering Women Through{" "}
            <span className="text-primary">
              Education
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted">
            Building knowledge, developing practical
            skills and creating opportunities for a
            better and independent future.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg"
            >
              Explore Programs
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <PlayCircle size={18} />
              Learn More
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-muted">
            <span>✓ Education</span>
            <span>✓ Skill Development</span>
            <span>✓ Women Empowerment</span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 md:order-2"
        >
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={heroImage}
              alt="Young students representing education and empowerment"
              className="h-[350px] w-full rounded-3xl object-cover sm:h-[450px] md:h-[520px]"
            />  
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-left-6">
            <p className="font-heading text-xl font-bold text-primary">
              Learn & Grow
            </p>
            <p className="mt-1 text-xs text-muted">
              Building a brighter future
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
