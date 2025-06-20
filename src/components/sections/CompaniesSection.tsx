import { companies } from "../../data/data";
import { CompaniesList } from "../presentational/CompaniesList";



export const CompaniesSection = () => {
  return (
    <div className="bg-gray-50 pt-19 pb-32">
      <div className="container">
        <h2 className="text-center font-medium text-4xl tracking-[-1px]">Companies We Work With</h2>
        <CompaniesList companies={companies} />
      </div>
    </div>
  );
};
