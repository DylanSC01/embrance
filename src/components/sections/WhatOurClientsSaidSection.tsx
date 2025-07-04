import React, { Suspense } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { useIsVisible, useSwiperNavigation } from "@/hooks";
import { clientsTestimonals } from "@/data/data";

const TestimonialsSliderList = React.lazy(() =>
  import("@/components/ui/TestimonialsSliderList").then((m) => ({
    default: m.TestimonialsSliderList,
  }))
);

export const WhatOurClientsSaidSection = () => {
  const { swiperRef, isBeginning, isEnd, slideNext, slidePrev } =
    useSwiperNavigation();

  const { ref, isVisible } = useIsVisible({ threshold: 0.3 });

  return (
    <section className="py-20 lg:py-32" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="flex justify-between"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.h2
            className="heading-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            What Our Client Said About Us
          </motion.h2>
          <motion.div
            className="hidden lg:flex gap-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
              },
            }}
          >
            <button
              onClick={slidePrev}
              disabled={isBeginning}
              aria-label="Previous testimonial"
              className="group h-[85px] w-[85px] flex items-center justify-center rounded-full transition-colors duration-300 text-white bg-primary disabled:bg-light-blue"
            >
              <ArrowLeft className="w-10 h-10 group-disabled:text-gray-400" />
            </button>

            <button
              onClick={slideNext}
              disabled={isEnd}
              aria-label="Next testimonial"
              className="group h-[85px] w-[85px] flex items-center justify-center rounded-full transition-colors duration-300 text-white bg-primary disabled:bg-light-blue"
            >
              <ArrowRight className="w-10 h-10 group-disabled:text-gray-400" />
            </button>
          </motion.div>
        </motion.div>

        {isVisible && (
          <Suspense fallback={<div className="mt-16 h-40" />}>
            <TestimonialsSliderList
              swiperRef={swiperRef}
              testimonials={clientsTestimonals}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};
