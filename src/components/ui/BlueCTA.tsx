
interface BlueCTAProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

export const BlueCTA = ({ title, description, buttonText, buttonLink }: BlueCTAProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:pl-[74px] lg:pr-[57px]">
      <div className="max-w-[393px] w-full">
        <h2 className="heading-2-white text-center lg:text-left mb-5 lg:mb-0">{title}</h2>
      </div>
      <div className="max-w-[483px] w-full text-center lg:text-left">
        <p className="font-lg-white mb-8">{ description }</p>
        <a href={ buttonLink } className="btn-large-secondary mx-auto lg:mx-0">
          { buttonText }
        </a>
      </div>
    </div>
  );
};
