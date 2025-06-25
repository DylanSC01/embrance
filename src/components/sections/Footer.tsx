import { footerLinks, socialLinks } from "@/data/data";


export const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-50 py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-0">
            <div className="flex flex-col items-center">
              <img src="/images/logo.png" alt="Embrance Logotype" className="mb-14 max-w-[186px] w-full"/>

              <div className="flex items-center gap-12 mb-[70px]">
                {socialLinks.map((link) => (
                  <a href={link.url} key={link.url} className="">
                    <img
                      src={link.icon}
                      alt={`${link.name} icon`}
                      className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>

              <a href="" className="btn-large">Contact Us</a>

            </div>
            <div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 lg:gap-x-[75px] lg:gap-y-12">
                    {
                        footerLinks.map((link, index) => (
                            <li key={index}><a href={link.url} className="w-full block hover:underline text-center lg:text-left">{link.name}</a></li>
                        ))
                    }
                    
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-12">
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-white text-center lg:text-left">
                <p className="!opacity-100">© 2022 Embrace, Inc. - All Rights Reserved</p>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-32">
                    <a href="#" className="underline">Term of use</a>
                    <a href="#" className="underline">Privacy policy</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};
