import React from "react";
import { useCart } from "react-use-cart";
import Testimonials from "../../Components/Testimonials/Testimonials";
import CustomForm from "../../Components/CustomForm/CustomForm";

export default function Shop({ products }) {
  const { addItem } = useCart();

  return (
    <div class="">
      <h2 className="text-2xl font-bold text-gray-900 md:text-6xl text-center py-12">Browse through our Catalogue</h2>

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
                </section>
              </section>
            </div>
          );
        })}
      </section>
      <CustomForm />
      <Testimonials />
    </div>
  );
}
