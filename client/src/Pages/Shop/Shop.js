import React from "react";
import ShopHero from "../../Components/ShopHero/ShopHero";
import { useCart } from "react-use-cart";
import Testimonials from "../../Components/Testimonials/Testimonials";

export default function Shop({ products }) {
  const { addItem } = useCart();

  return (
    <div>
      <ShopHero />
      <section className="mt-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
        {products.map((product) => {
          console.log(product);
          function handleClick() {
            addItem({ ...product, id: product._id });
            alert("The selected product has been added to cart");
          }

          return (
            <div className="grid product m-1 border border-solid border-gray-600 place-content-center">
              <section className="block group m-1 my-5">
                <img src={product.img} className="  h-[300px] aspect-square w-[300px] " />
                <section class="flex place-content-between max-w-[300px] ">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">{product.description}</p>
                    <p class="tracking-wider text-gray-900">{product.price}</p>
                  </div>
                  <div>
                    <svg
                      onClick={handleClick}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mt-5 mr-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </section>
              </section>
            </div>
          );
        })}
      </section>
      <Testimonials />
    </div>
  );
}
