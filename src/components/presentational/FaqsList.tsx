import { FaqDropdown, type Faq } from "./FaqDropdown"


interface FaqsListProps {
    faqs: Faq[];
}

export const FaqsList = ({ faqs } : FaqsListProps) => {
  return (
    <div className="border-t border-gray-300">
        {
            faqs.map((faq, index) => (<FaqDropdown faq={faq} key={index} />))
        }
    </div>
  )
}
