console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
// let counter = 1;

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // clock.innerHTML = date.toLocaleTimeString();
  console.log(date.toLocaleTimeString());
}, 1000);
