import { useState, useEffect, useRef } from "react";
import Swiper from "swiper";


export const useSwiperNavigation = () => {
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
