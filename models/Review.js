import Product from "./Product.js";
import mongoose from "mongoose";
const reviewSchema = mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User",
      },
      product: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "Product",
      },
      isAdmin: { type: Boolean, default: false },
      possessed: { type: Boolean, default: false },
      rating: { type: Number, required: true },
      // comment: { type: String, required: true },
      comment: { type: String },
      numLike: { type: Number, default: 0 },
      responseReview: {
         type: [
            {
               user: {
                  type: mongoose.Schema.Types.ObjectId,
                  required: true,
                  ref: "User",
               },
               comment: { type: String, required: true },
               // createdAt: { type: Date, default: Date.now() },
               createdAt: { type: Date },
            },
         ],
         default: [],
      },
      userLiked: {
         type: [
            {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               ref: "User",
            },
         ],
         default: [],
      },
   },
   {
      timestamps: true,
   }
);

reviewSchema.statics.calcAverageRatings = async function (productId) {
   const stats = await this.aggregate([
      {
         $match: { product: mongoose.Types.ObjectId(productId) },
      },
      {
         $group: {
            _id: "$product",
            numReviews: { $sum: 1 },
            averageRating: { $avg: "$rating" },
         },
      },
   ]);
   // console.log(stats);

   if (stats.length > 0) {
      await Product.findByIdAndUpdate(productId, {
         numReviews: stats[0].numReviews,
         averageRating: stats[0].averageRating,
      });
   }
   // else {
   //    await Product.findByIdAndUpdate(productId, {
   //       numReviews: 0,
   //       averageRating: 4.5,
   //    });
   // }
};

reviewSchema.post("save", function () {
   this.constructor.calcAverageRatings(this.product);
});

export default mongoose.models.review || mongoose.model("review", reviewSchema);
