/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

interface UseCarouselProps {
  totalSlides: number;
  slideDuration?: number;
}

interface UseCarouselReturn {
  currentPage: number;
  direction: number;
  progress: number;
  paginate: (newDirection: number) => void;
  goToSlide: (index: number) => void;
}

export const useCarousel = ({
  totalSlides,
  slideDuration = 3000,
}: UseCarouselProps): UseCarouselReturn => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (slideDuration / 100));
      } else {
        setProgress(0);
        paginate(1);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [page, progress, slideDuration]);

  const paginate = (newDirection: number) => {
    setPage(([current]) => {
      const newPage = (current + newDirection + totalSlides) % totalSlides;
      setProgress(0);
      return [newPage, newDirection];
    });
  };

  const goToSlide = (index: number) => {
    setPage(([current]) => {
      const newDirection = index > current ? 1 : -1;
      setProgress(0);
      return [index, newDirection];
    });
  };

  return {
    currentPage: page,
    direction,
    progress,
    paginate,
    goToSlide,
  };
};
