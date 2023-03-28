import React from "react";
import HomeHero from "../../Components/HomeHero/HomeHero";
import Customisation from "../../Components/Customisation/Customisation";
import NewsletterForm from "../../Components/NewsletterForm/NewsletterForm";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Customisation />
      <NewsletterForm />
    </div>
  );
}
