import { motion } from "motion/react";

import { DarkCTA } from "@/components/ui";

export const StartJourneySection = () => {
  return (
    <section className="py-20 lg:py-32 px-4">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <DarkCTA
          title={"Start Your Journey With Us Now"}
          buttonText={"Start Now"}
          buttonLink={"#"}
        />
      </motion.div>
    </section>
  );
};
