import { motion } from "motion/react";

import { ProcessesList } from "@/components/ui";
import { processes } from "@/data/data";

export const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div
        className="container flex flex-col lg:flex-row justify-between gap-10"
        id="how_it_works"
      >
        <motion.div className="lg:max-w-[499px] w-full mb-12 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut"}}
        viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="font-md mb-20">
            We believe that the best way to create successful marketing
            campaigns is to work closely with our clients to understand their
            goals and challenges.
          </p>
          <img src="/images/sketchs.webp" alt="Board with design sketchs" />
        </motion.div>
        <div className="lg:max-w-[590px]">
          <ProcessesList processes={processes} />
        </div>
      </div>
    </section>
  );
};
