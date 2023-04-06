import React from "react";
import AboutFounder from "../../Components/AboutFounder/AboutFounder";
import AboutHero from "../../Components/AboutHero/AboutHero";
import FAQs from "../../Components/FAQs/FAQs";
import Testimonials from "../../Components/Testimonials/Testimonials";
import NewsletterForm from "../../Components/NewsletterForm/NewsletterForm";

export default function About() {
  return (
    <div>
      <AboutHero />

      <AboutFounder />
      <Testimonials />
      <FAQs />
      <NewsletterForm />
    </div>
  );
}
