import { motion } from "motion/react";

export const MeetOurTeamSection = () => {
  return (
    <section className="py-20 lg:py-32" id="about">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          <motion.div
            className="max-w-full lg:max-w-[610px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/images/people.webp"
              alt="People images grid"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            className="max-w-full lg:max-w-[486px] text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-7">Meet Our Team</h2>
            <p className="font-sm mb-10 lg:mb-40">
              Discover the brilliance behind Embrace. Our team blends innovation
              and artistry to craft digital wonders that captivate
            </p>
            <a href="#" className="btn-large mx-auto lg:mx-0">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
