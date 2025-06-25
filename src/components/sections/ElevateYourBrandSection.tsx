import { motion } from "motion/react";

import { BlueCTA } from "@/components/ui";

export const ElevateYourBrandSection = () => {
  return (
    <section className="py-20 lg:py-32 px-4">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="py-20 min-h-[371px] bg-primary rounded-4xl flex items-center bg-[url(/images/bg_cta.webp)] bg-cover bg-no-repeat">
          <BlueCTA
            title={"Elevate your brand Today!"}
            description={
              " Ready to transform your digital dresence? Let's create magic together! book our services now!"
            }
            buttonText={"Book Call"}
            buttonLink={"#"}
          />
        </div>
      </motion.div>
    </section>
  );
};
