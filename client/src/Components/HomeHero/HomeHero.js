import React from "react";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="">
      <section className="bg-[url('../public/hero.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className=" mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Handcrafted. Wholehearted.
              <strong className="block font-extrabold text-7xl text-teal-700">Zibah Creations.</strong>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/shop"
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
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
