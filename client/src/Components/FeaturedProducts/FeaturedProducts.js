import React from "react";
import { a } from "react-router-dom";
import FeaturedPic from "../../Images/FeaturedProd.jpeg";
import PotHang from "../../Images/Plant Pot Hanger.jpeg";
import CushCover from "../../Images/CushionCover.jpeg";
import Belt from "../../Images/MacrameBelt.jpeg";
import WallHang from "../../Images/WallHangers.jpeg";

export default function FeaturedProducts() {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 rounded place-content-center sm:p-8 bg-[url('https://cdn.pixabay.com/photo/2023/01/07/08/41/leaves-7702829__480.jpg')] bg-cover bg-center bg-no-repeat">
              <div className="max-w-md mx-auto text-center lg:text-left ">
                <header>
                  <h2 className="text-xl font-bold text-white sm:text-3xl">Featured Macrame Products.</h2>
                </header>

                <a
                  href="/shop"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-teal-700 border border-teal-700 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="block group">
                    <img src={CushCover} alt="" className="object-cover w-full rounded aspect-square" />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Macrame Cushion Covers</h3>

                      <p className="mt-1 text-sm text-gray-700">From $15</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="block group">
                    <img src={PotHang} alt="" className="object-cover w-full rounded aspect-square" />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Plant Pot Hangers</h3>

                      <p className="mt-1 text-sm text-gray-700">From $10</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <img src={Belt} alt="" className="object-cover w-full rounded aspect-square" />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Macrame Belts</h3>

                      <p className="mt-1 text-sm text-gray-700">From $15</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <img src={WallHang} alt="" className="object-cover w-full rounded aspect-square" />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Macrame Wall Hangers</h3>

                      <p className="mt-1 text-sm text-gray-700">From $30</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
