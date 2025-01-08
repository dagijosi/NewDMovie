import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SlideShow = () => {
  const slides = [
    {
      title: "Inception",
      img: "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    },
    {
      title: "Stranger Things",
      img: "https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    },
    {
      title: "Demon Slayer",
      img: "https://image.tmdb.org/t/p/original/zIOYkC1pBBUWyYWk8XWxjQHJzXv.jpg",
    },
    {
      title: "Avengers: Endgame",
      img: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      title: "Attack on Titan",
      img: "https://image.tmdb.org/t/p/original/aiy35Evcofzl7hASZZvsFgltHTX.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mt-12  md:pr-14 relative">
      <div className="overflow-hidden rounded-lg relative h-48 md:h-72">
        <AnimatePresence>
          <motion.div
            key={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={slides[currentSlide].img}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-center text-lg md:text-2xl font-bold text-white">
                {slides[currentSlide].title}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={goToPreviousSlide}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white shadow-lg z-10"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white shadow-lg z-10"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
