import { motion } from "motion/react";

import { Form } from "@/components/ui";

export const HeroSection = () => {
  return (
    <section>
      <div className="container pt-20 pb-32">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <motion.div 
            className="max-w-[518px] text-center lg:text-left"
           initial={{ opacity: 0, x: -50}}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }} 
          >
            <h1 className="heading-1 mb-7">
              We Take Care of <br /> Your Brand
            </h1>
            <p className="font-lg mb-11">
              We care about our work and we care about our clients.
            </p>
            <Form />
          </motion.div>
          <motion.div 
            className="max-w-[608px]  w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/hero.webp"
              alt="Hero image"
              className="lg:w-full max-h-[350px] lg:max-h-full mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
