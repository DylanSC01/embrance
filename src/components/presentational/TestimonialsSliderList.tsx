import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialSlide, type Testimonial } from "./TestimonialSlide";

import { Navigation } from "swiper/modules";
import type { MutableRefObject } from "react";

import "swiper/css";

interface SliderCardListProps {
  testimonials: Testimonial[];
}

export const TestimonialsSliderList = ({
  testimonials,
}: SliderCardListProps) => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      freeMode={true}
      className="mt-16"
      navigation={true}
      modules={[Navigation]}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="!w-max">
          <TestimonialSlide testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
