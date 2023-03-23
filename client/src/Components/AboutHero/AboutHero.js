import React from "react";

export default function AboutHero() {
  return (
    <div>
      <section className="relative bg-[url('Images/hero.webp')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-6xl font-extrabold sm:text-5xl">
              Zibah Creations.
              <strong className="block font-extrabold text-4xl text-teal-700">For artists, by an Artist.</strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
