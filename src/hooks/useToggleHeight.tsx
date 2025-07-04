import { useRef, useState, useEffect, type RefObject } from "react";

interface UseToggleHeightReturn {
  contentRef: RefObject<HTMLDivElement | null>;
  height: string;
}


export const useToggleHeight = (isOpen: boolean): UseToggleHeightReturn => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return { contentRef, height };
};
