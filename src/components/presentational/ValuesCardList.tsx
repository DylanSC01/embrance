import { ValueCard, type Value } from "./ValueCard";

interface ValuesCardListProps {
  values: Value[];
}

export const ValuesCardList = ({ values }: ValuesCardListProps) => {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row gap-x-16 gap-y-10 items-center lg:justify-between lg:max-w-[489px]">
      {values.map((value, index) => (
        <ValueCard key={index} value={value} />
      ))}
    </div>
  );
};
