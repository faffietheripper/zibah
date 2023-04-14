import React from "react";
import HomeHero from "../../Components/HomeHero/HomeHero";
import NewsletterForm from "../../Components/NewsletterForm/NewsletterForm";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Customisation from "../../Components/Customisation/Customisation";
import FAQs from "../../Components/FAQs/FAQs";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Customisation />
      <FAQs/>
      <NewsletterForm />
    </div>
  );
}
