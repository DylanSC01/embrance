import { Form } from "../presentational/Form";

export const HeroSection = () => {
  return (
    <div>
      <div className="container pt-20 pb-32">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="max-w-[518px] text-center lg:text-left">
            <h1 className="mb-7">
              We Take Care of <br /> Your Brand
            </h1>
            <p className="font-lg mb-11">
              We care about our work and we care about our clients.
            </p>
            <Form />
          </div>
          <div className="max-w-[608px]  w-full">
            <img
              src="src/assets/images/hero.png"
              alt="Hero image"
              className="lg:w-full max-h-[350px] lg:max-h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
