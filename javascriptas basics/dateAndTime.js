//Date

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

let myCreatedDate = new Date(2023, 11, 31);
// console.log(myCreatedDate.toLocaleString());

myCreatedDate.toLocaleString("dafault", {
  dateStyle: "short",
});

console.log(myCreatedDate);
