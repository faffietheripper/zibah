import React from "react";
import { useCart } from "react-use-cart";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CustomForm from "../../Components/CustomForm/CustomForm";
import ShowMore from "react-show-more-button";

export default function Shop({ products }) {
  const { addItem } = useCart();

  return (
    <div class="mt-20 ">
      <h2 className="text-2xl font-bold text-gray-900 md:text-6xl text-center py-12">Browse through our Catalogue</h2>
      <ShowMore maxHeight={"100vh"}>
        <section className="mt-8 grid grid-cols-2   md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            console.log(product);
            function handleClick() {
              addItem({ ...product, id: product._id });
              alert("The selected product has been added to cart");
            }

            return (
              <div className="grid product m-1 border border-solid border-gray-600 place-content-center">
                <section className="block group m-1 my-5">
                  <img src={product.img} className="  lg:h-[300px] h-[150px] aspect-square lg:w-[300px] w-[150px] " />
                  <section class="flex place-content-between max-w-[300px] ">
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">{product.description}</p>
                      <p class="tracking-wider text-gray-900">{product.price}</p>
                    </div>
                  </section>
                </section>
              </div>
            );
          })}
        </section>
      </ShowMore>
      <CustomForm />
      <Testimonials />
    </div>
  );
}
