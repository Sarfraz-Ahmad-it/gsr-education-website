
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

// Learning & Activities Images
import educationImage from "../assets/images/gallery/educational-activities.png";
import beautyImage from "../assets/images/gallery/beauty-makeup.png";
import mehndiActivityImage from "../assets/images/gallery/creative-mehndi-art.png";
import tailoringImage from "../assets/images/gallery/tailoring-stitching.png";
import learningImage from "../assets/images/gallery/learning-together.png";
import digitalImage from "../assets/images/gallery/digital-learning.png";

// Client's Original Mehndi Designs
import mehndi1 from "../assets/images/gallery/portfolio/mehndi-01.jpg";
import mehndi2 from "../assets/images/gallery/portfolio/mehndi-02.jpg";
import mehndi3 from "../assets/images/gallery/portfolio/mehndi-03.jpg";
import mehndi4 from "../assets/images/gallery/portfolio/mehndi-04.jpg";
import mehndi5 from "../assets/images/gallery/portfolio/mehndi-05.jpg";
import mehndi6 from "../assets/images/gallery/portfolio/mehndi-06.jpg";


// Client's Original Bridal Makeup Looks
import bridal1 from "../assets/images/gallery/portfolio/bridal-01.jpg";
import bridal2 from "../assets/images/gallery/portfolio/bridal-02.jpg";
import bridal3 from "../assets/images/gallery/portfolio/bridal-03.jpg";
import bridal4 from "../assets/images/gallery/portfolio/bridal-04.jpg";
import bridal5 from "../assets/images/gallery/portfolio/bridal-05.jpg";
import bridal6 from "../assets/images/gallery/portfolio/bridal-06.jpg";

//Learning video and beauty skills
import beauty from "../assets/videos/beauty.mp4"; 
import education1 from "../assets/videos/education01.mp4"; 

const galleryImages = [
  {
    src: educationImage,
    title: "Educational Activities",
    alt: "Women learning basic education and literacy skills during educational training at GSR Education Saharanpur",
    category: "Education",
  },
  {
    src: beautyImage,
    title: "Beauty & Makeup",
    alt: "Women learning beauty care and makeup techniques during training at GSR Education Saharanpur",
    category: "Beauty Skills",
  },
  {
    src: mehndiActivityImage,
    title: "Creative Mehndi Art",
    alt: "Women learning traditional and creative mehndi designing skills during training at GSR Education Saharanpur",
    category: "Creative Skills",
  },
  {
    src: tailoringImage,
    title: "Tailoring & Stitching",
    alt: "Women learning tailoring and stitching skills during vocational training at GSR Education Saharanpur",
    category: "Vocational Skills",
  },
  {
    src: learningImage,
    title: "Learning Together",
    alt: "Women learning together in a collaborative environment at GSR Education Saharanpur",
    category: "Education",
  },
  {
    src: digitalImage,
    title: "Digital Learning",
    alt: "Women learning digital skills during training at GSR Education Saharanpur",
    category: "Computer Skills",
  },
];

const mehndiPortfolio = [
  {
    src: mehndi1,
    title: "Beautiful Front Hand Mehndi Design–Floral Patterns",
    alt: "Women learning bridal mehndi designs during training at GSR Education Saharanpur",
    category: "Mehndi Art",
  },
  {
    src: mehndi2,
    title: "Beautiful Front Hand Mehndi Design–Floral Patterns",
    alt: "Beautiful front hand mehndi design with detailed floral and Arabic patterns",
    category: "Mehndi Art",
  },
  {
    src: mehndi3,
    title: "Traditional Full Hand Mehndi Design–Intricate Patterns",
    alt: "Women learning bridal mehndi designs during training at GSR Education Saharanpur",
    category: "Mehndi Art",
  },
  {
    src: mehndi4,
    title: "Traditional Full Hand and Foot Mehndi Design–Bridal Mehndi Art",  
    alt: "Traditional full hand and foot mehndi designs featuring detailed floral and Arabic patterns by GSR Education",
    category: "Mehndi Art",
  },
  {
    src: mehndi5,
    title: "Bridal Foot Mehndi Design-Traditional Arabic Patterns",
    alt: "Traditional bridal foot mehndi design with intricate floral and paisley patterns",
    category: "Mehndi Art",
  },
  {
    src: mehndi6,
    title: "Beautiful Bridal Foot Mehndi Design–Floral and Traditional Patterns",
    alt: "Beautiful bridal foot mehndi design with intricate floral, leaf and traditional patterns by GSR Education",
    category: "Mehndi Art",
  },
];

const bridalPortfolio = [
  {
    src: bridal1,
    title: "Bridal Makeup Look 01",
    alt: "Women learning bridal makeup techniques and styles during training at GSR Education Saharanpur",
    category: "Bridal Makeup",
  },
  {
    src: bridal2,
    title: "Bridal Makeup Look 02",
    alt: "Women learning bridal makeup techniques and styles during training at GSR Education Saharanpur",
    category: "Bridal Makeup",
  },
  {
    src: bridal3,
    title: "Bridal Makeup Look 03",
    alt: "Women learning bridal makeup techniques and styles during training at GSR Education Saharanpur",
    category: "Bridal Makeup",
  },
  {
    src: bridal4,
    title: "Bridal Makeup Look 04",
    alt: "Women learning bridal makeup techniques and styles during training at GSR Education Saharanpur",
    category: "Bridal Makeup",
  },
  {
    src: bridal5,
    title: "Bridal Makeup Look 05",
    alt: "Women learning bridal makeup techniques and styles during training at GSR Education Saharanpur",
    category: "Bridal Makeup",
  },
  {
    src: bridal6,
    title: "Bridal Makeup Look 06",
    alt: "Women learning bridal makeup techniques and styles during training at GSR Education Saharanpur",
    category: "Bridal Makeup",
  },
];

function GalleryCard({ image, index, onClick }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onClick={onClick}
      aria-label={`View ${image.title}`}
      className="group relative overflow-hidden rounded-xl bg-background text-left sm:rounded-2xl"
    >
      <img
        src={image.src}
        alt={image.title}
        loading="lazy"
        className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />

      <div className="absolute bottom-0 left-0 p-3 sm:p-5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
          {image.category}
        </span>

        <h3 className="mt-1 text-sm font-semibold text-white sm:text-lg">
          {image.title}
        </h3>
      </div>
    </motion.button>
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const allImages = [
    ...galleryImages,
    ...mehndiPortfolio,
    ...bridalPortfolio,
  ];

  const currentIndex = allImages.findIndex(
    (image) => image === selectedImage
  );

  const showNext = () => {
    if (currentIndex === -1) return;

    setSelectedImage(
      allImages[(currentIndex + 1) % allImages.length]
    );
  };

  const showPrevious = () => {
    if (currentIndex === -1) return;

    setSelectedImage(
      allImages[
        (currentIndex - 1 + allImages.length) % allImages.length
      ]
    );
  };

  return (
    <section
      id="gallery"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold tracking-widest text-primary">
            OUR GALLERY
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            Moments of Learning & Growth
          </h2>

          <p className="mt-5 leading-8 text-muted">
            Explore moments of education, creativity
            and practical skill development.
          </p>
        </motion.div>

        {/* Learning & Activities */}
        <div>
          <div className="mb-7">
            <h3 className="font-heading text-2xl font-bold text-heading md:text-3xl">
              Learning & Activities
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              A glimpse into different areas of learning and development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={image.title}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Mehndi Portfolio */}
        <div className="mt-20">
          <div className="mb-7">
            <span className="text-xs font-bold tracking-widest text-primary">
              CREATIVE PORTFOLIO
            </span>

            <h3 className="mt-3 font-heading text-2xl font-bold text-heading md:text-3xl">
              Mehndi Art & Designs
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              Showcasing intricate traditional mehndi patterns
              and creative designs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {mehndiPortfolio.map((image, index) => (
              <GalleryCard
                key={image.src}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Bridal Makeup Portfolio */}
        <div className="mt-20">
          <div className="mb-7">
            <span className="text-xs font-bold tracking-widest text-primary">
              BEAUTY PORTFOLIO
            </span>

            <h3 className="mt-3 font-heading text-2xl font-bold text-heading md:text-3xl">
              Bridal Makeup Looks
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              Showcasing bridal makeup, styling and beauty
              transformation work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {bridalPortfolio.map((image, index) => (
              <GalleryCard
                key={image.title}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              >
                <X size={25} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
                className="absolute left-2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
              >
                <ChevronLeft size={26} />
              </button>

              <motion.div
                key={selectedImage.src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[85vh] max-w-5xl"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[75vh] max-w-full rounded-xl object-contain"
                />

                <p className="mt-3 text-center font-semibold text-white">
                  {selectedImage.title}
                </p>

                <p className="mt-1 text-center text-xs text-white/60">
                  {selectedImage.category}
                </p>
              </motion.div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-2 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
              >
                <ChevronRight size={26} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Training Videos */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold tracking-widest text-primary">
              VIDEO GALLERY
            </span>

            <h3 className="mt-4 font-heading text-3xl font-bold text-heading md:text-4xl">
              Training & Learning Videos
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted">
              Explore practical learning and makeup training demonstrations.
            </p>
          </div>

          
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <div className="bg-black">
              <video
                className="mx-auto max-h-[500px] w-full object-contain"
                controls
                preload="metadata"
                playsInline
              >
                <source src={beauty} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>

            <div className="p-5">
              <h4 className="font-semibold text-heading">
                Beauty Skills Demonstration
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted">
                Practical beauty and makeup training demonstrations.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <div className="bg-black">
             <video
                className="mx-auto max-h-[500px] w-full object-contain"
                controls
                preload="metadata"
                playsInline
              >
                <source src={education1} type="video/mp4" />
                Your browser does not support video playback.
             </video>
            </div>

               <div className="p-5">
                <h4 className="font-semibold text-heading">
                   Learning & Educational Activities
                </h4>

                <p className="mt-2 text-sm leading-6 text-muted">
                   A glimpse of learning activities and practical experiences at G.S.R. Education.
                </p>
               </div>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Gallery;
