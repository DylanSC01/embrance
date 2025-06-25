import { useSwiperSlide } from "swiper/react";
import type { Testimonial } from "@/types";

interface TestimonialSlideProps {
  testimonial: Testimonial;
}

export const TestimonialSlide = ({ testimonial }: TestimonialSlideProps) => {
  const { isActive } = useSwiperSlide();

  return (
    <div
      className={`w-[90vw] lg:w-[513px] rounded-4xl px-10 py-10 h-full transition-all duration-300 ${
        isActive ? "bg-primary text-white" : "bg-light-blue text-black"
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-5">
        <img
          src={`/images/${testimonial.avatar}`}
          className="h-21 w-21"
          alt=""
        />
        <div>
          <h3 className="heading-3">{testimonial.name}</h3>
          <p className="!opacity-100 font-lg mt-2">{testimonial.job}</p>
        </div>
      </div>
      <p className="!opacity-100 mt-5">{testimonial.text}</p>
    </div>
  );
};
