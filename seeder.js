import dotenv from "dotenv";
import mongoose from "mongoose";
import slugify from "slugify";
import colors from "colors";
import connectDB from "./db.js";

import User from "./models/User.js";
import Product from "./models/Product.js";
import Coupon from "./models/Coupon.js";
import Order from "./models/Order.js";
import Cart from "./models/Cart.js";
import Review from "./models/Review.js";
import WishList from "./models/WishList.js";
import users from "./data/users.js";
import accessories from "./data/accessories.js";
import laptops from "./data/laptops.js";
import kitchen from "./data/kitchen-appliances.js";
import home from "./data/home-applications.js";
import smartphones from "./data/smartphones.js";
import televisions from "./data/televisions.js";
import coupon from "./data/coupon.js";

function randomIntFromInterval(min, max, float = false) {
   // min and max included
   if (float) {
      const result = (Math.random() * (max - min + 1) + min).toFixed(1);
      // console.log(result);
      return result;
   }
   return Math.floor(Math.random() * (max - min + 1) + min);
}

let products = [
   ...laptops,
   ...accessories,
   ...kitchen,
   ...home,
   ...smartphones,
   ...televisions,
];

products = products.map((product, i) => {
   let discount = randomIntFromInterval(5, 70);
   product.averageRating = randomIntFromInterval(1, 4, true);
   product.sold = randomIntFromInterval(1, 50);
   product.countInStock = 30;
   product.discount = 0;
   product.active = true;
   if (Array.isArray(product.image)) {
      product.image = product.image[0].substring(1);
   } else {
      product.image = product.image.substring(1);
   }
   // product.discountDate = [];
   product.currentPrice = Number(product.price);
   if (i % 6 === 0) {
      return {
         ...product,
         discount,

         currentPrice: Number(
            (product.price * (1 - discount / 100)).toFixed(2)
         ),
         // soldDiscount: randomIntFromInterval(3, 40),
         // quantityDiscount: randomIntFromInterval(48, 80),

         // discountDate: children,
      };
   }

   return product;
});
products = products.sort((a, b) => 0.5 - Math.random());
dotenv.config();

// connectDB();

const importData = async () => {
   try {
      await connectDB();

      const createdUsers = await User.insertMany(users);

      const adminUser = createdUsers[0]._id;
      const sampleProducts = products.map((product) => {
         return {
            ...product,
            slug: slugify(product.name).toLowerCase(),
            user: adminUser,
         };
      });

      await Product.insertMany(sampleProducts);

      await Coupon.insertMany(coupon);

      console.log("Data Imported!".green.inverse);
      process.exit();
   } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
   }
};

const destroyData = async () => {
   try {
      await connectDB();
      await Coupon.deleteMany();
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
      await Review.deleteMany();
      await WishList.deleteMany();
      await Cart.deleteMany();

      // await Order.updateMany({}, [
      //    {
      //       $set: {
      //          statusTime: [new Date("$createdAt")],
      //       },
      //    },
      // ]);
      console.log("Data Destroyed!".red.inverse);
      process.exit();
   } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
   }
};

if (process.argv[2] === "-d") {
   destroyData();
} else {
   importData();
}
