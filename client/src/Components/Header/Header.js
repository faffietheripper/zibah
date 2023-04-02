import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>

            <img
              className="rounded h-[45px]"
              src="https://lh3.googleusercontent.com/Qb7e6n0OGJrOtO-C7cdx9XvwEvL8KW2wurUu1xWFMFID4gkg-f3mMluY1zczTtKLbSsLv8Duepi51T3JJ3kMCjt4-V04oqePZe3eXdxu8a-TDsrCVC67qF6RfP0OPzXFXpL9_skNmFbkEs23k_22chrgPqbGKFJDH9e2bw7ma1BMYk1VPQNi-SB1rV-5C0qCOFlzOLweSnb20NJhknDo5mt86jfYseSW9dfljyvmXoLQUyNQH3Wk9x6TM7bE7X7ZGRqQ1ul88YrkHEgudlm1l42DCTrPMdll0imgHfcH8wGQX9z0TkyoKI37XVT9U2S7lO3kCyrR8bcGpaugSDqxjfMSt_5DyfsNLseLJ1DDltu53rOXPiVwHHZDKtkgAeoVjCn5k95OqRguYPIdmJoWa2PseRSlT1Z5b0O7k1_hYy8X5uNyIhCJp4NUplV0w9_fS0Erx_c3bpFFlc_earfh2_c96X_YkaXwJyRveC043V-eEwTo3KCUYb6iWgsmpGpPFpOvizoTM020AdkLAMqzxLMM19Dmdp7DUoy0ZFNhGwWcWdQGnTdFW-GfJw4yafoMPR6EHF6p-bne35_rd7UngGQ7vzCM-HSf2y-vk1IzyOiW5NMtsCtjmcA6i7LEzDbvjbMuWUCehox_MruSf9VTjXzJ4rNRsooDRTO_ywH8tiMXWc4k9ilrlee9kTL9FsP3-qPCJOeA-ZsYaEET7g1wNcCv0Tu8ApNb-wvL-O00ONtZgLgxAtLCATe-HRwnJeTWCRXjyZHVCPSjLMyugHX-xjB0qmpzKRWvZBuLRyi4AIeJpiU_kRt4Q4FZDyxrIK28-P66CSefYJXEfR1pi9roUqC1OABKn8BUAG49zY0s0gQOE10BipSY8744HOHH4OBGsQZrWge7K33oyBbyx4mrQeGKoY6cGRQScMrWjuTjHVtK=w1057-h1057-s-no?authuser=0"
            ></img>
          </a>

          <div className="flex flex-1 items-center md:justify-between justify-between">
            <nav aria-label="Site Nav" className=" md:block ">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/shop">
                    Shop
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 transition hover:text-gray-500/75" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="teal" className="w-6 h-6">
                      <path
                        fillRule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </div>
  );
}
