import { TestimonialsSliderList } from "../presentational/TestimonialsSliderList";
import { clientsTestimonals } from "../../data/data";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const WhatOurClientsSaidSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isReady, setIsReady] = useState(false);

useEffect(() => {
  // Esperamos al primer render para asegurar que los botones estén en el DOM
  setIsReady(true);
}, []);

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="heading-2">What Our Client Said About Us</h2>
          <div className="flex gap-5">
            <button
              className="swiper-button-prev group h-[85px] w-[85px] flex items-center justify-center rounded-full transition-colors duration-300 text-white bg-primary disabled:bg-light-blue"
              ref={prevRef}
            >
              <ArrowLeft className="w-10 h-10 group-disabled:text-gray-400" />
            </button>

            <button
              className="swiper-button-next group h-[85px] w-[85px] flex items-center justify-center rounded-full transition-colors duration-300 text-white bg-primary disabled:bg-light-blue"
              ref={nextRef}
            >
              <ArrowRight className="w-10 h-10 group-disabled:text-gray-400" />
            </button>
          </div>
        </div>

        <div>
         {isReady && (
  <TestimonialsSliderList testimonials={clientsTestimonals} />
)}
        </div>
      </div>
    </section>
  );
};
