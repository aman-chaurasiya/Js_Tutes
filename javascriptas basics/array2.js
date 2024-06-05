const marvel_heros = ["ironman", "spiderman", "thor"];
const dc_heros = ["superman", "batman", "flash"];
const array = [1, 2, 3, 4, 5];
const array2 = [true, false, true];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const newarrya = marvel_heros.concat(dc_heros, array, array2);
// console.log(newarrya);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const anther_array = [1, 2, 3, [4, 5], 6, [7, 8, [1, 2], 8], 9];
// const real_another_array = anther_array.flat(1);
// console.log(real_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 1, 2 ], 8, 9 ]

// const real_another_array = anther_array.flat(2);
// console.log(real_another_array);//[ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2,8,9]

const real_another_array = anther_array.flat(Infinity);
console.log(real_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2,8,9]
