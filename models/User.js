import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";
// import { sendUser } from "@/utils/sendUser";
import WishList from "./WishList.js";
const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         // required: [true, "Please add a name"],
         default: function () {
            return this.email.split("@")[0].replace(/[^a-zA-Z ]/g, "");
            // return this.email.split("@")[0].replace(/[0-9]/g, "");
         },
      },
      email: {
         type: String,
         required: [true, "Please add an email"],
         unique: true,
         match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add a valid email",
         ],
      },
      password: {
         type: String,
         required: [true, "Please add a password"],
         // minlength: [6, "Password must be longer than 6 characters"],
         select: false,
      },
      role: {
         type: String,
         enum: ["user", "admin"],
         default: "user",
      },
      addressList: {
         type: [
            {
               name: String,
               phone: {
                  type: String,
                  maxlength: [
                     15,
                     "Phone number cannot be longer than 15 characters",
                  ],
               },
               city: String,
               district: String,
               ward: String,
               address: String,
            },
         ],
         default: [],
      },

      phone: {
         type: String,
         maxlength: [15, "Phone number cannot be longer than 15 characters"],
         default: "",
      },
      gender: {
         type: String,
         enum: ["male", "female", "other"],
         default: "male",
      },
      dob: {
         type: Date,
         default: "2000-01-01",
      },
      active: {
         type: Boolean,
         default: true,
      },
      passwordChangedAt: Date,
      passwordResetToken: String,
      passwordResetExpires: Date,
   },
   {
      timestamps: true,
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   }
);
// Virtual populate
userSchema.virtual("cart", {
   ref: "Cart",
   foreignField: "orderdBy",
   localField: "_id",
   justOne: true,
});
userSchema.methods.createPasswordResetToken = function () {
   const resetToken = crypto.randomBytes(32).toString("hex");

   this.passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

   // console.log({ resetToken }, this.passwordResetToken);

   this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

   return resetToken;
};
userSchema.methods.matchPassword = async function (enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
   this.wasNew = this.isNew; //de access post middware
   if (!this.isModified("password")) {
      next();
   }

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
});
userSchema.post("save", async function (doc, next) {
   //this point to document the schema cua mongoose con doc la cai ma save to database
   if (this.wasNew)
      await this.model("WishList", WishList).create({
         user: doc._id,
         products: [],
      });
   console.log(this.wasNew);
   // console.log(await doc.model("WishList").find());  duopc luon hay this hay doc cung duoc
   next();
});
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
   if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(
         this.passwordChangedAt.getTime() / 1000,
         10
      );

      return JWTTimestamp < changedTimestamp;
   }

   return false;
};

userSchema.methods.addAddress = async function ({
   defaultAddress,
   ...address
}) {
   // if (defaultAddress) {
   //    this.addressList.unshift({ ...address });
   // } else this.addressList.push({ ...address });

   // return await this.save();
   const condition = {
      $each: [{ ...address }],
      $position: defaultAddress ? 0 : undefined,
   };

   return await this.constructor.findByIdAndUpdate(
      this._id,
      {
         $push: {
            addressList: {
               ...condition,
            },
         },
      },
      { new: true }
   );
};
userSchema.methods.updateAddress = async function (
   { defaultAddress, ...addressUpdate },
   addressId
) {
   let newAddress;
   if (defaultAddress) {
      this.addressList = this.addressList.filter((address) => {
         if (address._id.toString() === addressId.toString()) {
            address.name = addressUpdate.name;
            address.phone = addressUpdate.phone;
            address.city = addressUpdate.city;
            address.district = addressUpdate.district;
            address.ward = addressUpdate.ward;
            address.address = addressUpdate.address;
            newAddress = address;
            return false;
         }
         return true;
      });
      this.addressList.unshift(newAddress);
   } else {
      this.addressList = this.addressList.map((address) => {
         if (address._id.toString() === addressId.toString()) {
            address.name = addressUpdate.name;
            address.phone = addressUpdate.phone;
            address.city = addressUpdate.city;
            address.district = addressUpdate.district;
            address.ward = addressUpdate.ward;
            address.address = addressUpdate.address;
         }
         return address;
      });
   }

   return await this.save();
};
userSchema.methods.deleteAddress = async function (addressId) {
   this.addressList = this.addressList.filter((address) => {
      return address._id.toString() !== addressId.toString();
   });
   return await this.save();
};
userSchema.methods.updateProfile = async function (user, res) {
   let changePass = false;

   this.name = user.name || this.name;
   this.phone = user.phone || "";
   this.dob = user.dob || this.dob;
   this.gender = user.gender || this.gender;
   if (user.email) {
      this.email = user.email;
   }
   if (user.password) {
      if (!(await this.matchPassword(user.oldPassword))) {
         res.status(401);
         throw new Error("Wrong password");
      }
      this.password = user.password;
      this.passwordChangedAt = Date.now();
      changePass = true;
   }

   const updatedUser = await this.save();

   // sendUser(res, updatedUser, null, changePass);
};

export default mongoose.models.User || mongoose.model("User", userSchema);
