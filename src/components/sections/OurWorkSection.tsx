import { motion } from "motion/react";

import { ProductsFeaturedList } from "@/components/ui";
import { productsFeatured } from "@/data/data";

export const OurWorkSection = () => {
  return (
    <section className="py-10 lg:py-32" id="our_work">
      <motion.div
        className="container-lg"
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="heading-2 text-center mb-3">Our Work</h2>
        <p className="text-center font-md mb-13">A glimpse of our portfolio</p>
        <ProductsFeaturedList products={productsFeatured} />
      </motion.div>
    </section>
  );
};
