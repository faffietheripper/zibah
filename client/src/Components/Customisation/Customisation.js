import React from "react";
import { Link } from "react-router-dom";

export default function Customisation() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://macrame.ie/wp-content/uploads/2022/03/KCbyV-Crossbody-Boho-Macrame-Bag-lead-image.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl"> Product Customisation Guidelines</h2>

                <p className="mt-4 text-gray-600">
                Because everything is made to order here, we can offer you a range of different colours and skin options that makes it possible for you to individualise your Zibah Creations products. Depending on the complexity of the style and material types and combinations you require, the price may vary from the standard prices shown on the website, our team who help you,  will make sure you are completely comfortable with the finished cost before processing your order. 
                </p>

                <Link
                  href="#"
                  className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
