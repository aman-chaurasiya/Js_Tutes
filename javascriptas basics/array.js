const arr = [1, 2, 3, 4, 5, "aman", "sunny"];
const arr2 = new Array(1, 2, 3, 4, 5, "Aman", "sunny");
// console.log(arr);

// arr.push(6);
// arr.push(7);
// arr.push(8);
// arr.push(9);
// arr.push(true);
// arr.push(false);

// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());

// arr.unshift(12);
// arr.unshift(13);
// arr.unshift(14);

// arr.shift();
// arr.shift();
// arr.shift();

// console.log(arr.includes("aman"));
// console.log(arr.indexOf(5));
// console.log(arr.indexOf("sunny"));

// const newArr = arr.join();
// console.log(newArr);

// console.log(arr);

const array1 = new Array(0, 1, 2, 3, 4);

console.log("A", array1);
const myn1 = array1.slice(0, 3);
console.log("slice", myn1);
console.log("B", array1);

const myn2 = array1.splice(0, 3);
console.log("splice", myn2);
console.log("C", array1);
