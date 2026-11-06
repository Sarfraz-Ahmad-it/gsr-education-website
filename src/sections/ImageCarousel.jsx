
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Carousel Images
import educationImage from "../assets/images/carousel/01-education-brighter-future.png";
import skillsImage from "../assets/images/carousel/02-learn-skills-build-confidence.png";
import womenImage from "../assets/images/carousel/03-creating-opportunities-for-women.png";
import growthImage from "../assets/images/carousel/04-building-knowledge-inspiring-growth.png";

// Slide Content
const slides = [
  {
    title: "Education for a Brighter Future",
    subtitle:
      "Promoting education, awareness and opportunities for personal growth.",
    label: "EDUCATION & AWARENESS",
    image: educationImage,
    alt: "Students learning together",
  },
  {
    title: "Learn Skills, Build Confidence",
    subtitle:
      "Encouraging practical learning and skill development for a better future.",
    label: "SKILL DEVELOPMENT",
    image: skillsImage,
    alt: "Women learning practical skills",
  },
  {
    title: "Creating Opportunities for Women",
    subtitle:
      "Supporting women's empowerment, independence and self-development.",
    label: "WOMEN EMPOWERMENT",
    image: womenImage,
    alt: "Women developing practical and creative skills",
  },
  {
    title: "Building Knowledge, Inspiring Growth",
    subtitle:
      "Learning today for a more confident and independent tomorrow.",
    label: "LEARNING & GROWTH",
    image: growthImage,
    alt: "Women learning computer and development skills",
  },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const currentSlide = slides[currentIndex];

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Previous Slide
  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // Auto Slide - Every 3 Seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Mobile Swipe Start
  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  // Mobile Swipe End
  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    setTouchStart(null);
  };

  return (
    <section id="home" className="scroll-mt-20 bg-background">
      <div
        className="relative w-full overflow-hidden bg-[#24151A]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.alt}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content */}
        <div className="relative z-10 mx-auto flex min-h-[390px] max-w-7xl items-center px-12 py-16 sm:min-h-[440px] sm:px-16 md:min-h-[540px] md:px-20 lg:min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl text-white"
            >
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-accent backdrop-blur-sm">
                {currentSlide.label}
              </span>

              <h1 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                {currentSlide.title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base md:text-lg">
                {currentSlide.subtitle}
              </p>

              <a
                href="#courses"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg"
              >
                Explore Learning Areas
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-primary sm:left-6 sm:h-12 sm:w-12"
        >
          <ArrowLeft size={21} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-primary sm:right-6 sm:h-12 sm:w-12"
        >
          <ArrowRight size={21} />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;

