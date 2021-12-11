import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema(
//    {
//       // name: { type: String, required: true },

//       user: {
//          type: mongoose.Schema.Types.ObjectId,
//          required: true,
//          ref: "User",
//       },
//       rating: { type: Number, required: true },
//       comment: { type: String, required: true },
//       like: { type: Number, default: 0 },
//    },
//    {
//       timestamps: true,
//    }
// );

const productSchema = mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User",
      },
      // reviews: [reviewSchema],
      name: {
         type: String,
         trim: true,
         required: [true, "Plase add a product name"],
      },
      slug: String,
      price: {
         type: Number,
         required: true,
         // default: 0,
         required: [true, "Please add a price"],
         min: [0, "Price cannot be lower than 0"],
      },
      currentPrice: {
         type: Number,
         required: true,
      },
      image: String,
      // image: {
      //    type: [String],
      //    required: true,
      // },
      description: {
         type: String,
         required: [true, "Please add a description"],
      },
      brand: {
         type: String,
         required: [true, "Please add a branch"],
      },

      category: {
         type: String,
         required: [true, "Please choose a category"],
         enum: [
            "Accessories",
            "Home Applications",
            "Kitchen Appliances",
            "Laptops",
            "Smartphone",
            "Televisions",
         ],
      },

      numReviews: {
         type: Number,
         required: true,
         default: 0,
      },
      averageRating: {
         type: Number,
         default: 0,
         min: [0, "Rating must be at least 1"],
         max: [5, "Rating cannot be higher than 5"],
         set: (val) => Math.round(val * 10) / 10,
      },
      countInStock: {
         type: Number,
         required: true,
         default: 0,
      },
      sold: {
         type: Number,
         default: 0,
      },
      discount: {
         type: Number,
         max: [100, "Discount cannot be higher than 100%"],
         min: [0, "Discount cannot be lower than 0%"],
      },
      // discountDate: {
      //    type: [Date],
      //    default: [],
      // },
      // soldDiscount: {
      //    type: Number,
      // },
      // quantityDiscount: {
      //    type: Number,
      // },
   },
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   }
);
// Virtual populate
productSchema.virtual("review", {
   ref: "Review",
   foreignField: "product",
   localField: "_id",
});

export default mongoose.models.Product ||
   mongoose.model("Product", productSchema);
