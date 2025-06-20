export interface Value {
  label: string;
  value: string;
}

interface ValueCardProps {
  value: Value;
}

export const ValueCard = ({ value }: ValueCardProps) => {
  return (
    <div className="min-w-[185px]">
      <h3 className="!text-[64px] !tracking-normal !font-semibold">
        {value.value}
      </h3>
      <p className="font-md">{value.label}</p>
    </div>
  );
};
