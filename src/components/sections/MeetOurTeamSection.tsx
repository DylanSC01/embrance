export const MeetOurTeamSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          <div className="max-w-full lg:max-w-[610px]">
            <img
              src="/src/assets/images/people.png"
              alt="People images grid"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="max-w-full lg:max-w-[486px] text-center lg:text-left">
            <h2 className="heading-2 mb-7">Meet Our Team</h2>
            <p className="font-sm mb-10 lg:mb-40">
              Discover the brilliance behind Embrace. Our team blends innovation
              and artistry to craft digital wonders that captivate
            </p>
            <a href="#" className="btn-large mx-auto lg:mx-0">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
