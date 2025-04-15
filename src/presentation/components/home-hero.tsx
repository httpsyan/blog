"use client";

import { ChevronRight, Timer, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation, contentAnimation } from "@/infrastructure";
import { useCarousel } from "@/domains";
import { usePosts } from "@/domains/posts/hooks/usePosts";

export const HomeHero = () => {
  const { posts } = usePosts();
  const featuredPosts = posts.slice(0, 3); // Pega os 3 primeiros posts para o carrossel

  const { currentPage, direction, paginate, goToSlide } = useCarousel({
    totalSlides: featuredPosts.length,
  });

  const currentPost = featuredPosts[currentPage];

  if (!currentPost) return null;

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
            src={currentPost.image}
            alt={currentPost.title}
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
                  {currentPost.category.name}
                </motion.span>

                <Link
                  href={`/posts/${currentPost.slug}`}
                  className="group block"
                >
                  <motion.h1
                    variants={contentAnimation}
                    custom={2}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight transition-colors duration-300 group-hover:text-[#2686EA]"
                  >
                    {currentPost.title}
                  </motion.h1>
                </Link>

                <motion.p
                  variants={contentAnimation}
                  custom={3}
                  className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl line-clamp-3 sm:line-clamp-none"
                >
                  {currentPost.description}
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
                      href={`/posts/${currentPost.slug}`}
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
                        Ler Artigo
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/posts/${currentPost.slug}`}
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
                        {currentPost.author.name}
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/posts/${currentPost.slug}`}
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
                        {currentPost.readTime}
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 self-end w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex gap-1.5 sm:gap-2">
              {featuredPosts.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 sm:h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentPage
                      ? "w-6 sm:w-8 bg-[#2686EA]"
                      : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
