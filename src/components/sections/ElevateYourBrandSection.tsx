import { BlueCTA } from "../presentational/BlueCTA";

export const ElevateYourBrandSection = () => {
  return (
    <section className="py-32 px-4">
      <div className="container py-20 min-h-[371px] bg-primary rounded-4xl flex items-center bg-[url(/src/assets/images/bg_cta.jpg)] bg-cover bg-no-repeat">
        <BlueCTA
          title={"Elevate your brand Today!"}
          description={
            " Ready to transform your digital dresence? Let's create magic together! book our services now!"
          }
          buttonText={"Book Call"}
          buttonLink={"#"}
        />
      </div>
    </section>
  );
};
