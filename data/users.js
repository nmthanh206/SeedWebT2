import bcrypt from "bcryptjs";

const users = [
   {
      name: "Admin",
      email: "admin@example.com",
      role: "admin",
      gender: "male",
      phone: "0734554393",
      password: bcrypt.hashSync("123456", 10),
      active: true,
   },
   {
      name: "Ngô Minh Thành",
      email: "culi@example.com",
      role: "user",
      gender: "male",
      phone: "0934563233",
      password: bcrypt.hashSync("123456", 10),
      active: true,
   },
   {
      name: "cu tre",
      email: "cutre@example.com",
      role: "user",
      gender: "male",
      phone: "0332313233",
      password: bcrypt.hashSync("123456", 10),
      active: true,
   },
];

export default users;
