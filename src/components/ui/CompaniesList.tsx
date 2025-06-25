import { motion, type Variants } from "motion/react";

interface Company {
  name: string;
  logo: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface CompaniesListProps {
  companies: Company[];
}

export const CompaniesList = ({ companies }: CompaniesListProps) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row lg:flex-row flex-wrap md:justify-center lg:justify-between items-center gap-x-28 gap-y-24 mt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {companies.map((company, index) => (
        <motion.div key={index} variants={itemVariants}>
          <img
            src={`/images/branches/${company.logo}`}
            className="h-[48px]"
            alt={company.name}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
