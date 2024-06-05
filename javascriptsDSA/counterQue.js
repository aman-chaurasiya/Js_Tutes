function increment(inc) {
  console.log("inc:", inc);
  count++;
}
function getCount(res) {
  console.log("res:", res);
  return count;
}
var count = 0;
const incrementCoumter = increment;
incrementCoumter(1);
incrementCoumter(2);
console.log(getCount(1));
