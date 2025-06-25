import type { MutableRefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { TestimonialSlide } from "@/components/ui";

import type { Testimonial } from "@/types";


import "swiper/css/pagination";
import "swiper/css";

interface SliderCardListProps {
  testimonials: Testimonial[];
  swiperRef: MutableRefObject<SwiperType | null>;
}

export const TestimonialsSliderList = ({
  testimonials,
  swiperRef,
}: SliderCardListProps) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      freeMode={true}
      className="mt-16 !overflow-y-visible"
      navigation={true}
      modules={[Navigation, Pagination]}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        1024: {
          pagination: false,
        }
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="!w-max">
          <TestimonialSlide testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
