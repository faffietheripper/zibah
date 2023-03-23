const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const Product = require("./models/products");

async function seed() {
  await Product.create({
    name: "Sling Bag",
    description: "Unisex and Stylish sling bags for all occassions.",
    price: "From $40",
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmacrameforbeginners.com%2Fwp-content%2Fuploads%2F2021%2F07%2FHow-to-Make-a-Macrame-Bag-Purse-%25E2%2580%2593-Knots-Supplies-DIY-Patterns.jpg&tbnid=FuvdD8W69Pj7pM&vet=12ahUKEwiIsJ-Dm-39AhUBtUwKHQ8MCMkQMygGegUIARDyAg..i&imgrefurl=https%3A%2F%2Fmacrameforbeginners.com%2Fhow-to-make-a-macrame-bag%2F&docid=jsYQ7fMfLXhBTM&w=900&h=600&q=macrame%20bag&ved=2ahUKEwiIsJ-Dm-39AhUBtUwKHQ8MCMkQMygGegUIARDyAg",
  });

  await Product.create({
    name: "Macrame Brown",
    description: "Beauty",
    price: "25",
    img: "",
  });

  mongoose.disconnect();
}
seed();
