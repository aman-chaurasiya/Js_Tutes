let input = [[10], [20, 30], [40], [50, 60], [80, [90, [100]]], 40];

function flatenArray(input, depth) {
  console.log(input);
  const result = input.flat(depth);
  return result;
}
console.log(flatenArray(input, Infinity));

const res = 10 + isNaN(2) ? 0 : 20;
console.log(res);

var a = 20;
var b = (a = 30);
console.log(a + b);
