import React from "react";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="">
      <section className="bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0579/7583/2716/collections/Homepage_Purses_Landscape_EDITED_1200x1200.jpg?v=1666028094')] bg-fixed bg-center bg-no-repeat">
        <div className="inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className=" mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-white lg:mb-0 mb-32 sm:text-5xl">
              Handcrafted. Wholehearted.</h2>
              <h1><strong className="block font-extrabold text-7xl text-teal-900">Zibah Creations.</strong></h1>
            

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/shop"
                className="block w-full rounded bg-teal-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-900 focus:outline-none focus:ring active:bg-teal-700 sm:w-auto"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
