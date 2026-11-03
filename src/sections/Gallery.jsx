
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=85",
    title: "Educational Activities",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1000&q=85",
    title: "Beauty & Makeup",
    category: "Beauty Skills",
  },
  {
    src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=85",
    title: "Creative Mehndi Art",
    category: "Creative Skills",
  },
  {
    src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1000&q=85",
    title: "Tailoring & Stitching",
    category: "Vocational Skills",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000&q=85",
    title: "Learning Together",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=85",
    title: "Digital Learning",
    category: "Computer Skills",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentIndex = galleryImages.findIndex(
    (image) => image === selectedImage
  );

  const showNext = () => {
    setSelectedImage(
      galleryImages[(currentIndex + 1) % galleryImages.length]
    );
  };

  const showPrevious = () => {
    setSelectedImage(
      galleryImages[
        (currentIndex - 1 + galleryImages.length) %
          galleryImages.length
      ]
    );
  };

  return (
    <section
      id="gallery"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-primary">
            OUR GALLERY
          </span>

          <h2 className="mt-4 font-heading text-3xl font-bold text-heading md:text-5xl">
            Moments of Learning & Growth
          </h2>

          <p className="mt-5 leading-8 text-muted">
            Explore moments of education, creativity
            and skill development.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

          {galleryImages.map((image, index) => (
            <motion.button
              type="button"
              key={image.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-xl text-left sm:rounded-2xl"
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64 lg:h-72"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 p-3 sm:p-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {image.category}
                </span>

                <h3 className="mt-1 text-sm font-semibold text-white sm:text-lg">
                  {image.title}
                </h3>
              </div>
            </motion.button>
          ))}

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

            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="flex aspect-video items-center justify-center bg-primary/10">
                <Play size={45} className="text-primary" />
              </div>

              <div className="p-5">
                <h4 className="font-semibold text-heading">
                  Makeup Training Session
                </h4>
                <p className="mt-2 text-sm text-muted">
                  Practical makeup learning and demonstration.
                </p>
                <p className="mt-3 text-xs text-primary">
                  Video coming soon
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="flex aspect-video items-center justify-center bg-primary/10">
                <Play size={45} className="text-primary" />
              </div>

              <div className="p-5">
                <h4 className="font-semibold text-heading">
                  Beauty Skills Demonstration
                </h4>
                <p className="mt-2 text-sm text-muted">
                  Learning beauty techniques through practical demonstrations.
                </p>
                <p className="mt-3 text-xs text-primary">
                  Video coming soon
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
