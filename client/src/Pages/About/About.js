import React from "react";
import AboutFounder from "../../Components/AboutFounder/AboutFounder";
import AboutHero from "../../Components/AboutHero/AboutHero";
import Newsletter from "../../Components/Newsletter/Newsletter";
import FAQs from "../../Components/FAQs/FAQs";
import Testimonials from "../../Components/Testimonials/Testimonials";
import AboutMission from "../../Components/AboutMission/AboutMission";


export default function About() {
  return (
    <div>
      <AboutHero />
      <AboutMission />
      <AboutFounder />
      <Testimonials />
      <FAQs />
      <Newsletter />

    </div>
  );
}
