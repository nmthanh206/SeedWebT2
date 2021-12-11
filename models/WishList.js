import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User",
      },
      products: {
         type: [
            {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               ref: "Product",
            },
         ],
         default: [],
      },
   },
   { timestamps: true }
);
export default mongoose.models.WishList ||
   mongoose.model("WishList", wishListSchema);
