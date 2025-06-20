import { ArrowRight } from "lucide-react"
import type { PropsWithChildren } from "react";

interface LinkArrowProps extends PropsWithChildren{
    href: string;
    customClass: string;
}

const LinkWithArrow = ({ href, customClass, children}: LinkArrowProps) => {
  return <a className={`link ${customClass}`} href={ href }>{children} <ArrowRight className="w-5" /></a>
}

export default LinkWithArrow