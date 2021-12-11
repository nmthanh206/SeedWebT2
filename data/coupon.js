const products = [
   { name: "discount2", expiry: Date.now(), discount: 10, quantity: 3 },
   {
      name: "discount",
      expiry: Date.now() + 1000 * 60 * 60 * 24 * 10,
      discount: 10,
      quantity: 4,
   },
   {
      name: "discount3",
      expiry: Date.now() + 1000 * 60 * 60 * 24 * 10,
      discount: 13,
      quantity: 30,
   },
   {
      name: "discount4",
      expiry: Date.now() + 1000 * 60 * 60 * 24 * 10,
      discount: 14,
      quantity: 15,
   },
   {
      name: "discount5",
      expiry: Date.now() + 1000 * 60 * 60 * 24 * 10,
      discount: 15,
      quantity: 30,
   },
];

export default products;
