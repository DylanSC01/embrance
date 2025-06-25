import { motion } from "motion/react";

import { ValueCard } from "@/components/ui";
import type { Value } from "@/types";

interface ValuesCardListProps {
  values: Value[];
}

export const ValuesCardList = ({ values }: ValuesCardListProps) => {
  return (
    <motion.div
      className="flex flex-wrap flex-col lg:flex-row gap-x-16 gap-y-10 items-center lg:justify-between lg:max-w-[489px]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
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
          <ValueCard value={value} />
        </motion.div>
      ))}
    </motion.div>
  );
};
