const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];

const newNum = num.map((item) => {
  return item + 10;
});

// const newNum = num
//   .map((item) => item * 10)
//   .map((item) => item + 1)
//   .filter((num) => num >= 40);
console.log(newNum);
