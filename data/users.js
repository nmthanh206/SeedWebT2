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
];

export default users;
