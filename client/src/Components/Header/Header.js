import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ZibahLogo from "../../Images/logo.jpg";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div class="fixed w-full top-0 left-0 text-white bg-red z-100">
      <div class="md:flex items-center justify-between  bg-black md:py-4 py-8 md:px-10 px-7">
        <div class="cursor-pointer">
          <Link to="/">
            <img src={ZibahLogo} alt="logo" class="h-[30px] ml-8" />
          </Link>
        </div>
        <div class="text-3xl absolute right-8 text-white top-6 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div>
          <ul
            className={`md:flex md:items-center gap-6 text-sm md:my-0  md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            <li class="my-16 md:my-2" onClick={() => setOpen(!open)}>
              <Link className="text-gray-200 transition hover:text-gray-500/75" to="/">
                Home
              </Link>
            </li>

            <li class="my-16 md:my-2" onClick={() => setOpen(!open)}>
              <Link className="text-gray-200 transition hover:text-gray-500/75" to="/shop">
                Shop
              </Link>
            </li>
            <li class="my-16 md:my-2" onClick={() => setOpen(!open)}>
              <Link className="text-gray-200 transition hover:text-gray-500/75" to="/Ruth">
                Ruth
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
