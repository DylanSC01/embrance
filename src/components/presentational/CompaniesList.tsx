interface Company {
  name: string;
  logo: string;
}

interface CompaniesListProps {
  companies: Company[];
}

export const CompaniesList = ({ companies }: CompaniesListProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row flex-wrap md:justify-center lg:justify-between items-center gap-x-28 gap-y-24 mt-16">
      {companies.map((company, index) => (
        <img src={`src/assets/images/branches/${company.logo}`} className="h-[48px]" alt={company.name} key={index} />
      ))}
    </div>
  );
};
