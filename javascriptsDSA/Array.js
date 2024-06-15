let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const { length: len } = "hello";
console.log(len);
const { length } = "aman";
console.log(length);

numbers.push(25);
const result = numbers.splice(0, 2);
console.log(result);
numbers = [80, ...numbers, 70];
numbers.length = 0;
console.log(numbers);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
