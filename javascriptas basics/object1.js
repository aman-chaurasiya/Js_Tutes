const mysym = Symbol("key1");

const jsUser = {
  name: "aman",
  "full name": "aman chaurasiya",
  age: 28,
  [mysym]: mysym,
  location: "gyanpur",
  email: "aman@gmail.com",
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mysym]);

// Object.freeze(jsUser);
// jsUser.email = "ashish#gmail.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user");
};
jsUser.greetingTwo = function () {
  console.log(`hello js user ,${this.name}`);
};
console.log(jsUser.greetingTwo());
