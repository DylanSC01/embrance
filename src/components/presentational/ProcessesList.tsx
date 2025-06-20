import { ProcesssCard, type Process } from "./ProcesssCard";


interface ProcessesListProps {
    processes: Process[];
}

export const ProcessesList = ({processes} : ProcessesListProps) => {
  return (
    <div className="flex flex-col gap-11">
      {
        processes.map( (process, index) => <ProcesssCard process={process} key={index} /> )
      }
    </div>
  )
}
