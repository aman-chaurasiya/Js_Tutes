// const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//   console.log(i);
// }

// const str = "hello word";
// for (const strg of str) {
//   console.log(strg);
//   //   if (strg == "o") {
//   //     break;
//   //   }
// }

// maps:- unique value in maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("Fr", "France");
map.set("IN", "India"); // unique key in maps

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key);
  //   console.log(value);
}
for (const [key, value] in map) {
  // for in loop is not work on maps
  console.log(key, value);
}

const myobject = {
  name: "aman chaurasiya",
  age: 28,
  job: "soft engineer",
  location: "new delhi",
};

// console.log(Object.keys(myobject), Object.values(myobject));

// for (const key of myobject) {     // forof is not work on objects
//   console.log(key);
// }

for (const key in myobject) {
  // forin is work on objects
  //   console.log(key, ":-", myobject[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(programming[key]);
}
