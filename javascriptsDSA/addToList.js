function addtoList(item, list) {
  return list.push(item);
}
const result = addtoList("apple", ["banana"]);
console.log(result);

function counter() {
  let count = 0;
  return function () {
    console.log("return function", count);
    count++;
    console.log("count:", count);
    return count;
  };
}

const c1 = counter()();
// console.log(c1);
const c2 = counter()();
// console.log(c2);

if (x === undefined) {
  console.log("hiiiiii");
} else {
  console.log("byeeeeee");
}
x = 10;
