import type { Process } from "@/types";


interface ProcesssCardProps {
    process: Process;
}

export const ProcesssCard = ({ process }: ProcesssCardProps) => {
  return (
    <div className="flex gap-8 lg:items-center">
        <div className="w-[72px] h-[72px] min-w-[72px] min-h-[72px] lg:w-[106px] lg:h-[106px] lg:min-w-[106px] lg:min-h-[106px] flex items-center justify-center bg-primary rounded-3xl">
            <img src={`/images/icons/${process.icon}`} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" alt={`Icon ${process.title}`} />
        </div>
        <div>
            <h3 className="heading-3">{process.title}</h3>
            <p className="font-sm">{process.description}</p>
        </div>
    </div>
  )
}
