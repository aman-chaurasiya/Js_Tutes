const obj1 = {
  name: "Aman",
  age: 28,
};
const obj2 = {
  name: "Aman",
  age: 28,
};

console.log(obj1 === obj2);

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
const result = JSON.stringify(obj1);
console.log(result);
