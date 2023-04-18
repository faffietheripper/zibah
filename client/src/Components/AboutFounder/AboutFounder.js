import React from "react";
import Founder from "../../Images/Ruth.jpeg"

export default function AboutFounder() {

  return (
    <div>
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-teal-900 md:text-3xl">Meet Our Founder - Ruth</h2>

            <p className="text-gray-700 md:mt-4 md:block">
              Ruth is a creative artist who started Zibah Creations as a hobby in 2017. She is a mother to a beautiful girl and is studying for a
              Finance degree at a South African University. She currently resides in Harare, Zimbabwe. Her other artistic ventures include stone
              sculpting and story writing. She loves the beauty in nature and enjoys long walks and cycling.
            </p>
          </div>
        </div>

        <img
          alt="Student"
          src={Founder}
          className="h-70 w-full object-cover sm:h-full "
        />
      </section>
    </div>
  );
}
