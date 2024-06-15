// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyHitesh();
// heroPower.heyHitesh();  // heyHitesh is available only in array not in object because its is only in array prototype

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = User;
User.__proto__ = Teacher;

console.log(Teacher.name);
// // modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
// Object.setPrototypeOf(User, Teacher);

console.log(User.makeVideo);
// console.log(Teacher);
console.log(TASupport.isAvailable);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

// anotherUsername.trueLength();
// "hitesh     ".trueLength();
// "iceTea".trueLength();
