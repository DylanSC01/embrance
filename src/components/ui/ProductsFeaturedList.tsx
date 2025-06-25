import { motion } from "motion/react";

import { ProductFeaturedCard } from "@/components/ui";
import type { ProductFeatured } from "@/types";

interface ProductsFeaturedListProps {
  products: ProductFeatured[];
}

export const ProductsFeaturedList = ({
  products,
}: ProductsFeaturedListProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="flex flex-wrap justify-center gap-11 lg:gap-5">
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
          >
            <ProductFeaturedCard product={product} />
          </motion.div>
        ))}
      </div>
      <a href="#" className="btn-large mx-auto mt-13">
        See More
      </a>
    </motion.div>
  );
};
