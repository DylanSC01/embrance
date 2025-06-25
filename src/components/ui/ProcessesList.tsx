import { motion } from "motion/react";
import type { Process } from "@/types";
import { ProcesssCard } from "@/components/ui";

interface ProcessesListProps {
  processes: Process[];
}

export const ProcessesList = ({ processes }: ProcessesListProps) => {
  return (
    <motion.div
      className="flex flex-col gap-11"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {processes.map((process, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <ProcesssCard process={process} />
        </motion.div>
      ))}
    </motion.div>
  );
};
