import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { useToggleHeight } from "@/hooks/useToggleHeight";
import type { Faq } from "@/types";



interface FaqDropdownProps {
  faq: Faq;
}

export const FaqDropdown = ({ faq }: FaqDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { contentRef, height } = useToggleHeight(isOpen);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-gray-300 py-8">
      <button
        onClick={toggleOpen}
        className="w-full text-left focus:outline-none cursor-pointer flex justify-between items-center"
      >
        <h3 className="heading-3-sm">{faq.question}</h3>
        <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white font-medium leading-0">
          {isOpen ? <Minus className="h-4" /> : <Plus className="h-4" />}
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="mt-2 text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};
