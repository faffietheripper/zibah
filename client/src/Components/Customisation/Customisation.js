import React from "react";
import { a } from "react-router-dom";
import Custom from "../../Images/CustomGuide.jpeg";

export default function Customisation() {
  return (
    <>
      <div id="custom">
        <section class="lg:mb-36">
          <div className="lg:mx-28 mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-[60vh] lg:grid-cols-2 ">
              <div className=" z-10 lg:py-16 ">
                <div className=" h-[60vh] sm:h-[60vh] lg:w-[600px] lg:h-[60vh]">
                  <img alt="Custom Guidelines" src={Custom} className=" h-full w-full object-cover" />
                </div>
              </div>

              <div className="flex items-center bg-[url('https://cdn.pixabay.com/photo/2023/01/07/08/41/leaves-7702829__480.jpg')] bg-cover bg-center bg-no-repeat">
                <span className="hidden lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl"> Product Customisation Guidelines</h2>

                  <p className="mt-4 text-gray-200">
                    Because everything is made to order here, we can offer you a range of different colours and design options that makes it possible
                    for you to individualise your Zibah Creations products. Depending on the complexity of the style and material types and
                    combinations you require, the price may vary from the standard prices shown on the website, our team who help you, will make sure
                    you are completely comfortable with the finished cost before processing your order.
                  </p>

                  <a
                    href="/shop"
                    className="mt-8 inline-block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
                  >
                    Order a Custom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
