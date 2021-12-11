import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: "User",
      },
      orderItems: [
         {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               ref: "Product",
            },
            commented: {
               type: Boolean,
               default: false,
            },
         },
      ],
      address: {
         type: String,
         required: [true, "Please add an address"],
      },
      paymentMethod: {
         type: String,
         required: true,
      },
      phone: {
         type: String,
         required: true,
      },
      paymentResult: {
         id: { type: String },
         status: { type: String },
         created: { type: Date },
         // email_address: { type: String },
         receipt_email: {
            type: String,
            required: [true, "Please add an email"],

            match: [
               /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
               "Please add a valid email",
            ],
         },
         receipt_name: { type: String },
      },
      statusTime: {
         type: [Date],
         default: [],
      },
      totalPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      shippingPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },

      discountPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      total: {
         type: Number,
         required: true,
         default: 0.0,
      },
      status: {
         type: String,
         required: true,
         enum: [
            "Ordered Successfully",
            "Shop Received",
            "Getting Product",
            "Packing",
            "Shipping handover",
            "Shipping",
            "Delivered",
            "Cancelled",
         ],
         default: "Ordered Successfully",
      },
   },
   {
      timestamps: true,
   }
);
// orderSchema.post("save", function () {
//    this.model('Product')
// });
// orderSchema.pre("save", async function (next) {
//    if(this.isNew)
//    {
//       await this.model("Coupon").findByIdAndUpdate(couponId, { $inc: { quantity: -1 } });
//    }
//    // const result = await this.model("Coupon").find();
//    // console.log(result);
//    next();
// });
// orderSchema.post("save", async function (next) {
//    if
//    const result = await this.model("Coupon").find();
//    console.log(result);
// });
export default mongoose.models.Order || mongoose.model("Order", orderSchema);
