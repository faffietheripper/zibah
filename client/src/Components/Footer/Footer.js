import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class="pt-20">
      <p>
        <footer aria-label="Site Footer" className="bg-white lg:grid lg:grid-cols-5">
          <div className=" block h-32 lg:col-span-2 lg:h-96">
            <img
              src="https://lh3.googleusercontent.com/pw/AMWts8DUFJLFRAok6ih_vfBFzMx9CW6G2ewR9cFf6NFrG-uO32SYXGcjrvZ-NZND5jJbUV7v_d3P9q6IECnBJ9RZOM-1ysYDCTLtEqB8B7z9f3zYtTf9gq-J_s9wMzwOt87yyDd-B2s5wI-5c9QEu3vftjZC0SEUTs-VJf5lY8FBvXnXipedUCktw8ktQB6Q70EbJ_LrIsJD-VCSSQsVf7n6-bnE4LJelr5UNIfRQrIIabai9HEeYllzUrO1Rx2q4ES1AbgnMST3BmmrVFnD90rPbVg3G9mmpx6I4K64Sj_93aXHlyCm6sJfaXZq9i1yZVYQj6wN8SGkGAcF88V3F9jEy8jTQBzjsnep95ReIMZLiJRwy8fmT554NviyW08AOv_BnBSOgtMgESJuBSta9mis-047ZpzUz-XviSpKgF-9Oa6cbXocyocIh_SVHeCNNmtapB-J1TdZWoXQh4jdOTpA98s5xmH0q9B680LoTP8HQQxx6OH54kxUmGYL2te_tDjoUVqsPQxhZXhx5AZe4IsIiyphchTDCc2HcCpkSQJcOAh2-dDIx9qPT3fwoaD8HoQ7cLOh6AtKcvYl43imXDYwrOfUd0ELtYYHG3LWiz7J_Ljd2VVJBNZxBjbBH-G5FXAPv4isfUNRV82kubfypXGGHu8DyQoy-0apuy-g7t9yJ7FOBUNvw1sVnGWwq9WPvpv9r48TGpC8VXpn0LJTE2F6PAVyXCUmjWsMHhNf2cEBMNJGPdTMiuaqrEkvknrI1NO2dXnLNEvMmhwh3BZnCPS_4_K_YQM2OMwWLDPvSYjHPYCRtAhAhimWiIDau0TfgOWMXN5HAxH-LrdwLzj-7GjML8cFeY0WABimka8aDkQDkag_WqCDhR3N_K-0ZLukBJOV54wUddnrdL9xJ1zFd7c73drUAhR_BBlbSEzOeqIFze3utkA5GuYztL3NInuHC_3IRsMXqs8=w232-h233-no?authuser=0"
              alt=""
              className="inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p>
                  <span className="text-xs tracking-wide text-gray-500 uppercase">Whatsapp Us</span>

                  <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                    +263 77 780 2867
                  </a>
                </p>

                <ul className="mt-8 space-y-1 text-sm text-gray-700">
                  <li>Monday to Friday: 10am - 5pm</li>
                  <li>Weekend: 10am - 3pm</li>
                </ul>

                <ul className="flex gap-6 mt-8">
                  <li>
                    <Link
                      to="https://www.facebook.com/profile.php?id=100069111076138"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
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
                        <Link to="/shop" className="text-gray-700 transition hover:opacity-75">
                          Catalogue
                        </Link>
                      </li>

                      <li>
                        <Link to="/" className="text-gray-700 transition hover:opacity-75">
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
                <p className="mt-8 text-xs text-gray-500 sm:mt-0">&copy; 2022. Zibah Creations designed by Tino👑.</p>
              </div>
            </div>
          </div>
        </footer>
      </p>
    </div>
  );
}
