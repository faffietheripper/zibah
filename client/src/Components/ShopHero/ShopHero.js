import React from "react";

export default function ShopHero() {
  return (
    <div>
      <section className="overflow-hidden bg-[url('Images/hero.webp')] bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Browse through our Catalogue</h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi doloribus iure architecto quae voluptatum
              beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
