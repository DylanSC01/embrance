import { ProcessesList } from "../presentational/ProcessesList";
import { processes } from "../../data/data";

export const HowItWorksSection = () => {
  return (
    <section className="container flex flex-col lg:flex-row justify-between gap-10 py-20 sm:py-32">
      <div className="lg:max-w-[499px] w-full mb-12 lg:mb-0">
        <h2 className="heading-2 mb-4">How It Works</h2>
        <p className="font-md mb-20">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p>
        <img
          src="/src/assets/images/sketchs.png"
          alt="Board with design sketchs"
        />
      </div>
      <div className="lg:max-w-[590px]">
        <ProcessesList processes={processes} />
      </div>
    </section>
  );
};
