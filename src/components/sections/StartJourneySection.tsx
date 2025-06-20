import { DarkCTA } from "../presentational/DarkCTA";

export const StartJourneySection = () => {
  return (
    <section className="py-32 px-4">
      <div className="container py-[52px] min-h-[455px] bg-primary rounded-4xl flex items-center bg-[url(/src/assets/images/bg_pattern.jpg)] bg-cover bg-no-repeat">
        <DarkCTA
          title={"Start Your Journey With Us Now"}
          buttonText={"Start Now"}
          buttonLink={"#"}
        />
      </div>
    </section>
  );
};
