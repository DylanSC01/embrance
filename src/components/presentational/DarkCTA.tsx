
interface DarkCTAProps {
    title: string;
    buttonText: string;
    buttonLink: string;
}

export const DarkCTA = ({ title, buttonText, buttonLink }: DarkCTAProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full px-6 lg:pl-[74px] lg:pr-[57px]">
      <div className="max-w-full lg:max-w-[521px] w-full text-center lg:text-left mb-10 lg:mb-0">
        <h2 className="heading-2-sm text-white mb-20">{title}</h2>
        <a href={ buttonLink } className="btn-large mx-auto lg:mx-0">
          { buttonText }
        </a>
      </div>
      <div className="max-w-full lg:max-w-[352px] w-full flex justify-center lg:justify-end">
        <img src="/src/assets/images/circle.svg" alt="" />
      </div>
    </div>
  );
};
