import { motion } from "motion/react";

import { CompaniesList } from "@/components/ui";
import { companies } from "@/data/data";


export const CompaniesSection = () => {
  return (
    <section className="bg-gray-50 pt-19 pb-32">
      <div className="container">
        <motion.h2 
          className="text-center font-medium text-4xl tracking-[-1px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}      
        >
          Companies We Work With
        </motion.h2>
        <CompaniesList companies={companies} />
      </div>
    </section>
  );
};
