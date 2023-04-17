import React from "react";
import { Link } from "react-router-dom";
import TradeMark from "../../Images/Footer.jpeg"

export default function Footer() {
  return (
    <div class="pt-20">
      <p>
        <footer aria-label="Site Footer" className=" lg:grid lg:grid-cols-5">
          <div className=" block h-32 lg:col-span-2 lg:h-96">
            <img
              src={TradeMark}
              alt=""
              className="inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p>
                  <span className="text-xs tracking-wide text-gray-200 uppercase">Whatsapp Us</span>

                  <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                    +263 77 780 2867
                  </a>
                </p>

                <ul className="mt-8 space-y-1 text-sm text-gray-200">
                  <li>Monday to Friday: 10am - 5pm</li>
                  <li>Weekend: 10am - 3pm</li>
                </ul>

                <ul className="flex gap-6 mt-8">
                  <li>
                    <Link
                      to="https://www.facebook.com/profile.php?id=100069111076138"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-200 transition hover:opacity-75"
                    >
                      <span className="sr-only">Facebook</span>

                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-medium text-gray-900">Company</p>

                  <nav aria-label="Footer Navigation - Company" className="mt-6">
                    <ul className="space-y-4 text-sm">
                      <li>
                        <Link to="/shop" className="text-gray-200 transition hover:opacity-75">
                          Catalogue
                        </Link>
                      </li>

                      <li>
                        <Link to="/" className="text-gray-200 transition hover:opacity-75">
                          Product Customisation Guidelines
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-12 border-t border-gray-100">
              <div className="sm:flex sm:items-center sm:justify-between">
                <p className="mt-8 text-xs text-gray-200 sm:mt-0">&copy; 2022. Zibah Creations designed by Tino👑.</p>
              </div>
            </div>
          </div>
        </footer>
      </p>
    </div>
  );
}
