import { motion } from "motion/react";

import { ValuesCardList, LinkWithArrow } from "@/components/ui";
import { values } from "@/data/data";


export const CommitmentsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container flex flex-col-reverse lg:flex-row justify-between gap-y-12 lg:gap-x-10">
        <div>
            <ValuesCardList values={values} />
        </div>
        <motion.div 
        className="lg:max-w-[576px] w-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut"}}
        viewport={{ once: true }}
        >
          <h2 className="heading-2">Commitments</h2>
          <p className="font-md mt-5">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <LinkWithArrow href={"#"} customClass={"mt-16"}>Learn More</LinkWithArrow>
        </motion.div>
      </div>
    </section>
  );
};

