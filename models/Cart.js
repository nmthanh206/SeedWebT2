import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
   {
      products: {
         type: [
            {
               product: {
                  type: mongoose.Schema.Types.ObjectId,
                  required: true,
                  ref: "Product",
               },
               // name: String,
               // price: Number,
               quantity: Number,
               // image: String,
               check: { type: Boolean, default: false },
               // countInStock: {
               //    type: Number,
               //    required: true,
               //    default: 10,
               // },
            },
         ],
         default: [],
      },
      // cartTotal: Number,
      // totalAfterDiscount: Number,
      orderdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   },
   { timestamps: true }
);

cartSchema.methods.addOrUpdateCart = async function (productUpdate) {
   let alreadyAddProduct = false;
   this.products = this.products.map((product) => {
      if (product.product.toString() === productUpdate.product.toString()) {
         alreadyAddProduct = true;
         product.quantity = product.quantity + productUpdate.quantity;
      }
      return product;
   });
   if (!alreadyAddProduct)
      this.products.push({
         product: productUpdate.product,
         quantity: productUpdate.quantity,
         check: productUpdate.check || false,
      });
   return await this.save();
   // let alreadyAddProduct = false;
   // this.products = this.products.map((product) => {
   //    if (product.product._id.toString() === productUpdate.product.toString()) {
   //       alreadyAddProduct = true;
   //       product.quantity = product.quantity + productUpdate.quantity;
   //    }
   //    return product;
   // });
   // if (!alreadyAddProduct)
   //    this.products.push({
   //       product: productUpdate.product,
   //       quantity: productUpdate.quantity,
   //       check: productUpdate.check || false,
   //    });
   // return await this.save();
};
cartSchema.methods.deleteProductCart = async function (productId) {
   if (productId === "undefined")
      this.products = this.products.filter((product) => !product.check);
   else {
      this.products = this.products.filter(
         (product) => product.product.toString() !== productId.toString()
      );
   }
   return await this.save();
};

cartSchema.methods.updateQuantityOrCheck = async function (cartUpdate) {
   if (cartUpdate.hasOwnProperty("checkAll")) {
      this.products = this.products.map((product) => {
         product.check = cartUpdate.checkAll;
         return product;
      });
   } else {
      this.products = this.products.map((product) => {
         if (product.product._id.toString() === cartUpdate.product.toString()) {
            if (cartUpdate.quantity) product.quantity = cartUpdate.quantity;
            if (cartUpdate.hasOwnProperty("check")) {
               product.check = cartUpdate.check;
            }
         }
         return product;
      });
   }
   return await this.save();
};
export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
