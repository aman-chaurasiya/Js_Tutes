let input = [4, 5, 6];
let regex = new RegExp("^[0-9]+$", "g");
let result = regex.test(input);

console.log(result);
