import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import "./App.css";
import Shop from "./Pages/Shop/Shop";
import AdminLogin from "./Pages/AdminAu/AdminLogin";
import AdminHome from "./Admin/AdminHome";
import axios from "axios";
import { useEffect, useState } from "react";
import { CartProvider } from "react-use-cart";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  console.log(process.env.REACT_APP_SERVER);
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let API = "https://zibahcreations.netlify.app/products";

    // if (name !== "") {
    //   API = API + "?name=" + name;
    // }
    const res = await axios.get(API);
    setProducts(res.data);
  }
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/admin1" element={<AdminLogin />} />
          <Route path="/adminhome" element={<AdminHome products={products} getProducts={getProducts} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
