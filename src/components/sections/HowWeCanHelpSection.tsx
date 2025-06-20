import { FAQS } from "../../data/data"
import { FaqsList } from "../presentational/FaqsList"
import LinkWithArrow from "../presentational/LinkWithArrow"




export const HowWeCanHelpSection = () => {
  return (
    <section className="py-32">
        <div className="container">
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-16">
                <div className="max-w-full lg:max-w-[616px]">
                    <FaqsList faqs={FAQS} />
                </div>
                <div className="max-w-full lg:max-w-[464px]">
                    <h2 className="heading-2-xs mb-4">How We Can Help You?</h2>
                    <p className="font-lg mb-8">Follow our newsletter. We will regulary update our latest project and availability.</p>
                    
                    <div>   
                        <form>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                                <input type="text" className="w-full !border-0 !bg-gray-50" placeholder="Enter Your Email" />
                                <button className="btn h-16 text-nowrap !px-10">Lets Talk</button>
                            </div>
                        </form>
                    </div>

                    <LinkWithArrow href={"#"} customClass={"mt-10"}>More FAQ</LinkWithArrow>
                </div>
            </div>
        </div>
    </section>
  )
}
