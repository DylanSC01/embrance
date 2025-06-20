import CommitmentsSection from "./components/sections/CommitmentsSection";
import { CompaniesSection } from "./components/sections/CompaniesSection";
import { Header } from "./components/presentational/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { OurWorkSection } from "./components/sections/OurWorkSection";
import { ElevateYourBrandSection } from "./components/sections/ElevateYourBrandSection";
import { MeetOurTeamSection } from "./components/sections/MeetOurTeamSection";
import { StartJourneySection } from "./components/sections/StartJourneySection";
import { HowWeCanHelpSection } from "./components/sections/HowWeCanHelpSection";
import { Footer } from "./components/presentational/Footer";
import { WhatOurClientsSaidSection } from "./components/sections/WhatOurClientsSaidSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesSection />
      <CommitmentsSection />
      <HowItWorksSection />
      <OurWorkSection />
      <ElevateYourBrandSection />
      <MeetOurTeamSection />
      <WhatOurClientsSaidSection />
      <StartJourneySection />
      <HowWeCanHelpSection />
      <Footer />
    </>
  );
}

export default App;
