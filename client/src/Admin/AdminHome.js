import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Components/LogoutButton/LogoutButton";

export default function AdminHome({ getProducts }) {
  const { isAuthenticated } = useAuth0();

  const user = process.env.User;
  if (user !== process.env.User) {
    return !isAuthenticated;
  }

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
  });

  useEffect(() => {
    getProducts();
  }, [name]);

  async function getProducts() {
    let API = "https://zibah-creations-server.netlify.app/.netlify/functions/api/products";

    if (name !== "") {
      API = API + "?name=" + name;
    }
    const res = await axios.get(API);
    setProducts(res.data);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function deleteProduct(id, name) {
    const confirmDelete = window.confirm(`Are you sure you want to permanently delete ${name}?`);
    if (confirmDelete) {
      const API = `https://zibah-creations-server.netlify.app/.netlify/functions/api/products/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getProducts();
    }
  }

  async function handleAddProduct(event) {
    event.preventDefault();
    const API = "https://zibah-creations-server.netlify.app/.netlify/functions/api/products";
    const res = await axios.post(API, form);

    // add our new product to the page
    const newProductsList = [...products, res.data];
    setProducts(newProductsList);

    // reset the form
    setForm({
      name: "",
      description: "",
      price: "",
      img: "",
    });
  }

  return (
    isAuthenticated && (
      <>
        <div className="mt-36">
          <section className="text-center">
            <input onChange={handleName} value={name} placeholder="Search for Product" className="text-center border border-solid rounded" />

            <div className="mt-8 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
              {products.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="my-6">
                      <p> Name: {product.name}</p>
                      <p> Price: {product.price}</p>
                      <img className="h-[250px] w-[300px] rounded object-contain " src={product.img} />

                      <span
                        className="border border-solid border-black rounded m-2 bg-orange-500"
                        onClick={() => deleteProduct(product._id, product.name)}
                      >
                        {" "}
                        Remove{" "}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <section className="bg-teal-700 m-6 flex flex-col">
              <h2 className="text-center"> Add a Product</h2>
              <form onSubmit={handleAddProduct} className="text-center ">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
                <input name="img" value={form.img} onChange={handleChange} placeholder="Image" />
                <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
                <button type="submit"> Add Product</button>
              </form>
            </section>
          </section>
        </div>
        <LogoutButton />
      </>
    )
  );
}
