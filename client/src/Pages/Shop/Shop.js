import React from "react";
import ShopHero from "../../Components/ShopHero/ShopHero";
import { useCart } from "react-use-cart";

export default function Shop({ products }) {
  const { addItem } = useCart();

  return (
    <div>
      <ShopHero />
      <section className="flex place-content-around m-6 flex-wrap my-8">
        {products.map((product) => {
          console.log(product);
          function handleClick() {
            addItem({ ...product, id: product._id });
            alert("The selected product has been added to cart");
          }

          return (
            <div className="product m-1  border-solid border-black rounded">
              <section className="block group m-1">
                <img src={product.img} className=" h-[150px] sm:h-[300px] rounded-md aspect-square sm:w-[300px] w-[150px]" />
                <p className="font-medium text-gray-900">{product.name}</p>
                <p>{product.description}</p>
                <p className="mt-1 text-sm text-red-700">{product.price}</p>

                <button className="block w-full rounded bg-teal-600 p-4 text-sm font-medium transition hover:scale-105" onClick={handleClick}>
                  Add to cart
                </button>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
}
