import { values } from "../../data/data";
import LinkWithArrow from "../presentational/LinkWithArrow";
import { ValuesCardList } from "../presentational/ValuesCardList";



const CommitmentsSection = () => {
  return (
    <div className="py-32">
      <div className="container flex flex-col-reverse lg:flex-row justify-between gap-y-12 lg:gap-x-10">
        <div>
            <ValuesCardList values={values} />
        </div>
        <div className="lg:max-w-[576px] w-full">
          <h2 className="heading-2">Commitments</h2>
          <p className="font-md mt-5">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <LinkWithArrow href={"#"} customClass={"mt-16"}>Learn More</LinkWithArrow>
        </div>
      </div>
    </div>
  );
};

export default CommitmentsSection;
