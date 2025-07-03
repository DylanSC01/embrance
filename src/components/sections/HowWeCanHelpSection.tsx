import { motion } from "motion/react";

import { EmailForm, FaqsList, LinkWithArrow } from "@/components/ui";
import { FAQS } from "@/data/data";

export const HowWeCanHelpSection = () => {
  return (
    <section className="py-20 lg:py-32" id="faqs">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-16">
          <motion.div
            className="max-w-full lg:max-w-[616px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <FaqsList faqs={FAQS} />
          </motion.div>
          <motion.div
            className="max-w-full lg:max-w-[464px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2-xs mb-4">How We Can Help You?</h2>
            <p className="font-lg mb-8">
              Follow our newsletter. We will regulary update our latest project
              and availability.
            </p>

            <div>
              <EmailForm
                wrapperClassName="flex flex-col sm:flex-row gap-4 sm:gap-2"
                inputClassName="!border-0 !bg-gray-50 w-full"
                buttonClassName="btn h-16 text-nowrap !px-10"
              />
            </div>

            <LinkWithArrow href={"#"} customClass={"mt-10"}>
              More FAQ
            </LinkWithArrow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
