import React from "react";
import HomeHero from "../../Components/HomeHero/HomeHero";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Customisation from "../../Components/Customisation/Customisation";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedProducts />
      <Customisation />
      <Newsletter />
    </div>
  );
}
