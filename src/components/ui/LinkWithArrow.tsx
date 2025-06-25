import type { PropsWithChildren } from "react";
import { ArrowRight } from "lucide-react"

interface LinkArrowProps extends PropsWithChildren{
    href: string;
    customClass: string;
}

export const LinkWithArrow = ({ href, customClass, children}: LinkArrowProps) => {
  return <a className={`link ${customClass}`} href={ href }>{children} <ArrowRight className="w-5" /></a>
}

