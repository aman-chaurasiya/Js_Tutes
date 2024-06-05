const num = [1, 2, 3, 0, 4, 8, 9, 0, 5, 0, 6, 0, 9, 10, 12];

//move all zero to right and non zero to left

//type 1

/*
const nonZero = [];
const Zero = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] === 0) {
    Zero.push(num[i]);
  } else {
    nonZero.push(num[i]);
  }
}
console.log(nonZero);
console.log(Zero);
*/
// type 2
/*
const nonZero = num.filter((item) => item !== 0);
const Zero = num.filter((item) => item === 0);
let result = [...nonZero, ...Zero];
console.log(result);
*/
//type 3
/*
const result = [
  ...num.filter((value) => value !== 0),
  ...num.filter((value) => value === 0),
];
console.log(result);
*/

//type 4

// let j=num.length-1;
// for (let i = 0; i < num.length; i++) {
//     if(num[i]===0){
//         if(num[j]){
//             j--;

//         }
//     }

// }
