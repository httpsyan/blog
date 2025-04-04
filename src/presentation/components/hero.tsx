"use client";

import { ChevronLeft, ChevronRight, Timer, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, contentAnimation } from "@/infrastructure";
import { useCarousel } from "@/domains";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1742054294284-baa5691ede46?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Breaking News",
    title:
      "China's E-Commerce Marketplaces Connect Citizens and Global Consumers",
    description:
      "At the heart of the strategy is a renewed commitment to education, economic development, and cultural preservation. Federal Minister for Indigenous Affairs, Marcia Lawson, outlined a series of measures that include enhanced funding for",
    author: "David Goggins",
    readTime: "3 min read",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    tag: "Technology",
    title: "AI Revolution: How Machine Learning is Transforming Industries",
    description:
      "Artificial Intelligence continues to reshape how businesses operate, with new breakthroughs in machine learning algorithms leading to unprecedented efficiency gains and innovation across sectors.",
    author: "Sarah Chen",
    readTime: "5 min read",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1707345512638-997d5c814f88?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    tag: "Business",
    title: "Global Markets Shift: The Rise of Sustainable Investments",
    description:
      "Investors worldwide are increasingly focusing on sustainable and ESG-compliant investments, marking a significant shift in global financial markets and corporate responsibility.",
    author: "Michael Bloomberg",
    readTime: "4 min read",
  },
];

export const HeroCarousel = () => {
  const { currentPage, direction, progress, paginate, goToSlide } = useCarousel(
    {
      totalSlides: slides.length,
    }
  );

  const currentSlide = slides[currentPage];

  return (
    <section className="min-h-[85vh] w-full relative flex items-end pb-8 sm:pb-12 md:pb-16 overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={`image-${currentPage}`}
          className="absolute inset-0"
          custom={direction}
          variants={slideAnimation}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={100}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-4">
          <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentPage}`}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.span
                  variants={contentAnimation}
                  custom={1}
                  className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                >
                  {currentSlide.tag}
                </motion.span>

                <Link href="/news/china-ecommerce" className="group block">
                  <motion.h1
                    variants={contentAnimation}
                    custom={2}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight transition-colors duration-300 group-hover:text-[#2686EA]"
                  >
                    {currentSlide.title}
                  </motion.h1>
                </Link>

                <motion.p
                  variants={contentAnimation}
                  custom={3}
                  className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl line-clamp-3 sm:line-clamp-none"
                >
                  {currentSlide.description}
                </motion.p>

                <motion.div
                  variants={contentAnimation}
                  custom={4}
                  className="flex flex-wrap gap-3 sm:gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:block"
                  >
                    <Link
                      href="/news/china-ecommerce"
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        className="bg-black/5 backdrop-blur-[2px] text-white/70 rounded-lg font-medium hover:bg-black/10 hover:text-white transition-all p-1"
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <ChevronRight className="size-3 sm:size-4" />
                      </motion.span>
                      <span className="text-xs sm:text-sm text-white">
                        Read Story
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/news/china-ecommerce"
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        className="bg-black/5 backdrop-blur-[2px] text-white/70 rounded-lg font-medium hover:bg-black/10 hover:text-white transition-all p-1"
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <User className="size-3 sm:size-4" />
                      </motion.span>
                      <span className="text-xs sm:text-sm text-white">
                        {currentSlide.author}
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/news/china-ecommerce"
                      className="flex items-center gap-2"
                    >
                      <motion.span
                        className="bg-black/5 backdrop-blur-[2px] text-white/70 rounded-lg font-medium hover:bg-black/10 hover:text-white transition-all p-1"
                        whileHover={{
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <Timer className="size-3 sm:size-4" />
                      </motion.span>
                      <span className="text-xs sm:text-sm text-white">
                        {currentSlide.readTime}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 self-end w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex gap-1.5 sm:gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className="relative w-6 sm:w-8 h-0.5 rounded-full bg-black/10 overflow-hidden cursor-pointer hover:bg-black/20 transition-colors"
                  onClick={() => goToSlide(index)}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#2686EA]/70 origin-left"
                    initial={false}
                    animate={{
                      scaleX: currentPage === index ? progress / 100 : 0,
                    }}
                    transition={{
                      duration: 0.1,
                      ease: "linear",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2 sm:gap-3">
              <motion.button
                className="p-1 sm:p-1.5 rounded-full bg-black/5 backdrop-blur-[2px] text-white/70 hover:bg-black/10 hover:text-white transition-all"
                onClick={() => paginate(-1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="size-3 sm:size-4" />
              </motion.button>
              <motion.button
                className="p-1 sm:p-1.5 rounded-full bg-black/5 backdrop-blur-[2px] text-white/70 hover:bg-black/10 hover:text-white transition-all"
                onClick={() => paginate(1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="size-3 sm:size-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
