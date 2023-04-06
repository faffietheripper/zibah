import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

export default function Admin() {
  const [name, setName] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
  });

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

  return (
    <AdminHome
      handleName={handleName}
      name={name}
      deleteProduct={deleteProduct}
      handleAddProduct={handleAddProduct}
      form={form}
      handleChange={handleChange}
    />
  );
}
