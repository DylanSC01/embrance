import { useState, useEffect, useRef, type MutableRefObject } from "react";
import Swiper from "swiper";

export interface UseSwiperNavigationReturn {
  swiperRef: MutableRefObject<Swiper | null>;
  isBeginning: boolean;
  isEnd: boolean;
  slidePrev: () => void;
  slideNext: () => void;
}

export const useSwiperNavigation = (): UseSwiperNavigationReturn => {
  const swiperRef = useRef<Swiper>(null);

  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    const update = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", update);

    return () => {
      swiper.off("slideChange", update);
    };
  }, [swiperRef.current]);

  return {
    swiperRef,
    isBeginning,
    isEnd,
    slidePrev: () => swiperRef.current?.slidePrev(),
    slideNext: () => swiperRef.current?.slideNext(),
  };
};
