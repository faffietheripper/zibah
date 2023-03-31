import React from "react";
import { useCart } from "react-use-cart";

export default function Cart() {
  const { emptyCart } = useCart();
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>

        <h1>Cart ({totalUniqueItems})</h1>

        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex flex-row my-8 mx-8 place-content-around">
              {item.quantity} x {item.name}
              <img src={item.img} className="w-[70px] h-[70px] rounded" />
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              <svg onClick={() => removeItem(item.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          ))}
        </ul>
        <button
          className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-teal-700 border border-teal-700 rounded hover:shadow focus:outline-none focus:ring"
          onClick={emptyCart}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}
